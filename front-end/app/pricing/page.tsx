import { title } from "@/components/primitives";
import { Card, CardBody, CardHeader } from "@heroui/card";
import Link from "next/link";


const pricingOptions = [
  {
    // Lol
    title: "Economy Class",
    price: "$199",
    features: ["Basic seat", "1 carry-on bag", "In-flight entertainment"],
  },
  {
    title: "Business Class",
    price: "$499",
    features: ["Spacious seat", "2 carry-on bags", "Gourmet meal service"],
  },
  {
    title: "First Class",
    price: "$999",
    features: ["Private suite", "Priority boarding", "Luxury amenities"],
  },
];

export default function PricingPage() {
  return (
    <section className="flex flex-col items-center gap-8 py-8 md:py-10">
      <h1 className={title()}>Pricing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {pricingOptions.map((option, index) => (
          <Card key={index} className="p-6">
            <CardHeader>
              {option.title}
            </CardHeader>
            <CardBody>
              <p className="text-4xl font-bold mb-4">{option.price}</p>
              <ul className="mb-6 text-gray-600">
                {option.features.map((feature, i) => (
                  <li key={i} className="mb-2">- {feature}</li>
                ))}
              </ul>
              <Link href="/book-flight">Order now</Link>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
