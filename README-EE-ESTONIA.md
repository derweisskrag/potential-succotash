# potentsiaalne-sukkotash
CGI Praktika Testülesanne

See hoidla sisaldab lennusoovituste rakenduse koodi, mis on ehitatud Kotliniga taustal ja Next.js-iga kasutajaliidese jaoks. Projekt sisaldab ka Dockerit konteineriseerimiseks, mis muudab juurutamise ja kohaliku testimise lihtsamaks.

## Lahendatud probleem

Siin tahan öelda: ärge lisage neid ridu veel:

```kt

tasks.getByName<Jar>("jar") {
    enabled = false // Keelab tavalise JAR-i
}

tasks.getByName<org.springframework.boot.gradle.tasks.bundling.BootJar>("bootJar") {
    enabled = true // Lubab käivitatava JAR-i koos peamise manifesti atribuudiga
}
```

> Need lähevad faili `gradle.build.kt` (et luua jar, kui see viskab "no manifest main" vea).

Põhjus on lihtne: kui teie rakendus töötab (järgides allolevat juhendit), siis see töötab. Kui ei, ja viga ütleb "no manifest main", siis juhtub midagi halba, mis takistab Dockeril oma JAR-faili kätte saamist, kus asub peamine Java klass ja manifest. Sellisel juhul kontrollige oma keskkonda:

1. Kontrollige, millist Gradle versiooni te kasutate. Minu puhul oli see uusim.
2. Kontrollige, millist Gradle versiooni IntelliJ IDEA kasutab (JetBrains'i toode). Kui see erineb, sundige IDEA kasutama teie Gradle'i.
3. Veenduge, et Docker saaks JAR-faili, mitte `demo-0.0.1-SNAPSHOT-plain.jar`. See on väga oluline. Docker tahab JAR-i, mitte tavalist JAR-i.
4. Kui IDEA Gradle genereerib tavalise JAR-i, kuid teie Gradle käsuga `./gradlew clean build` või `./gradlew bootJar` loob selle, mida Docker vajab: `your_app.jar`, ja Gradle versioonid erinevad: kustutage kõik JAR-id, sundige IDEA kasutama teie Gradle'i ja ehitage projekt `./gradlew clean build` käsuga. Minu puhul tootis IDEA Gradle JAR-i ka ehitamise ajal, nii et ma ei pidanud seda käsitsi terminalis käivitama. Võite kasutada ülaltoodud koodiridu ja lisada need `gradle.build.kt` faili.
5. Nice. Kui olete siiani jõudnud, kontrollige Docker faili. Te ei pea `compose.yaml` faili kasutama, kuid ma jätsin selle igaks juhuks. Töötab! Sel hetkel piisab, kui käivitada `./run.ps1` (Windowsis) või `./run_build.sh` (Linuxis). Või käsitsi: `docker build -t kotlin-app:latest .` ja seejärel `docker run -p 8080:8080 kotlin-app:latest`. Või klõpsake lihtsalt IDEA-s Docker faili nuppe.
6. Nautige! Kontrollige minu salajast API marsruuti: `localhost:8080/Furina/furina`.

## Vabandused

Vabandan, et ei suutnud eelmisel aastal täisväärtuslikku äpirakendust teha. Eelmisel aastal esitasin ainult Next.js osa, Kotlin ei töötanud.

Sel aastal toon teile Kotlin+Docker+NextJS (15.2 Modern TS). See töötas! DockerHubi push õnnestus! GitHub Actions töötas! Õppisin CI/CD. Olen nüüd insener! Kandideerin järgmisel aastal uuesti.

## Alternatiiv

Kuna rakendus on juba 3 päeva tagasi DockerHubi üles laetud, võite teha järgmist:

```
docker pull kuuking/kotlin-app:latest
```

```
docker run -p 8080:8080 kuuking/kotlin-app:latest
```

Seega pole vaja isegi git clone teha, kuid probleem on selles, et Vercel, mis kasutab NextJS-i, ei pruugi API kaudu andmeid saada, kuna Docker töötab lokaalselt. Peab olema `https:server.com/flights`. Aga kui käitate NextJS-i lokaalselt, töötab see seni, kuni Kotlin töötab pordil 8080, nagu eespool näidatud.

## Projekti seadistamine

### Eeltingimused
- Docker (konteineriseerimiseks)
- Java JDK 23 (või uuem) Kotlini backend'i jaoks
- Node.js ja npm (kasutajaliidese jaoks)

### Lokaalne käivitamine

Järgige neid samme, et käivitada rakendus oma masinas:

1. **Klooni hoidla**:
   ```bash
   git clone https://github.com/your-username/potential-succotash.git
   cd potential-succotash
   ```

2. **Seadista backend (Kotlin)**:
   - Veendu, et sul on Java JDK 23 paigaldatud (kui ei ole, laadi see alla [siit](https://adoptopenjdk.net/)).
   - Uuenda Gradle build faili, kui vaja, et vahetada JDK 17-lt JDK 23-le.
   - Käivita testid, et veenduda, et kõik töötab:
     ```bash
     ./gradlew test
     ```

3. **Ehita ja paki backend**:
   - Puhasta ja ehita Kotlini backend:
     ```bash
     ./gradlew clean build
     ```
   - Loo JAR-fail:
     ```bash
     ./gradlew bootJar
     ```

4. **Seadista Docker**:
   - Ehita Docker image:
     ```bash
     docker build -t kotlin-app:latest .
     ```
   - Käivita backend konteiner:
     ```bash
     docker run -p 8080:8080 kotlin-app:latest
     ```

5. **Testi backend'i**:
   - Ava brauseris `http://localhost:8080`, et kontrollida, kas backend töötab ja näha olemasolevaid API lõppe.

### Käivita frontend (Next.js)

1. **Mine frontend kausta**:
   ```bash
   cd front-end
   ```

2. **Paigalda sõltuvused**:
   ```bash
   npm install
   ```

3. **Käivita frontend rakendus**:
   ```bash
   npm run dev
   ```

4. **Ava rakendus brauseris**:
   - Rakendus töötab aadressil `http://localhost:3000`.
   - Saate vormi kaudu andmeid saata Kotlini backend'i.

---

## Funktsioonid

- **Lennusoovitused**: Backend pakub sorteeritud nimekirja soovitatud lendudest, järjestatud hinna järgi. Frontend kuvab need andmed.
- **Vormi esitamine**: Saate vormi kaudu andmeid saata backend'i töötlemiseks.

---

## Testimine

Projekt sisaldab backend'i teste, mida saab käivitada järgmise käsuga:

```bash
./gradlew test
```

