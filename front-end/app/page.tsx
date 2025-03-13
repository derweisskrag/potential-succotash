import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import FlightGrid from "@/components/FlightGrid";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className={`${title()} my-5`}>Airplane Company</h1>
        <Carousel />
      </div>
      

      <div className="my-5">
      <FlightGrid />
      </div>
    </section>
  );
}
