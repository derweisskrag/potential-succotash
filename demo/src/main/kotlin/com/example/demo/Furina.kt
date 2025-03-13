package com.example.demo

import org.springframework.ui.Model;
import org.springframework.core.io.ClassPathResource
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.io.BufferedReader
import java.io.InputStreamReader
import java.util.*

@RestController
@RequestMapping("/Furina")
class Furina {
    @GetMapping("/secret")
    fun getSecretMessage(): String {
        val resource = ClassPathResource("title.txt")
        val bufferedReader = BufferedReader(InputStreamReader(resource.inputStream))
        val firstLine = bufferedReader.readLine()
        bufferedReader.close()

        return firstLine
    }

    @GetMapping("/hello")
    fun getHelloMessage(): String {
        return "Greetings from Furina with Spring Boot!"
    }
}