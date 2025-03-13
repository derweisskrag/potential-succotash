import { title } from "@/components/primitives";
import Image from "next/image";

import { Button } from "@heroui/button";


export default function AboutPage() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 py-8 md:py-10">
      {/* Left Side */}
      <div className="flex flex-col items-start gap-4">
        <h1 className={`${title()}`}>About Us</h1>
        <Image src={'/future.webp'} alt={"Future image"} width={500} height={250} className="rounded-lg" />
        <h2 className="text-xl font-semibold">Powered by OpenAI</h2>
      </div>

      {/* Right Side */}
      <div className="flex flex-col items-start gap-6 max-w-md">
        <h1 className={title()}>Who We Are</h1>
        <p className="text-lg text-gray-600">
          We are a team of innovators and tech enthusiasts who leverage cutting-edge AI technology to deliver exceptional products and services.
        </p>
        <p className="text-lg text-gray-600">
          Our mission is to make the world a better place by creating AI-powered solutions that solve real-world problems.
        </p>
        
      </div>
    </section>
  );
}