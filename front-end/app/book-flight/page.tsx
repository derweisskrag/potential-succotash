'use client';

import { title } from "@/components/primitives";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader} from "@heroui/card";
import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaUser } from "react-icons/fa";
import { useState } from "react";
import {baseURL} from "@/server/get_url";

export default function BookFlight() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    passengers: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send data to the Kotlin backend
    const response = await fetch(`${baseURL}/flights/book-flight`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.text();
    console.log(result); // Expected: "Success!"
  };




  return (
    <section className="flex flex-col items-center gap-8 py-8 md:py-10">
      <h1 className={title()}>Wanna book a flight?</h1>
      <Card className="w-full max-w-lg p-6">
        <CardHeader>
          <h2 className="text-xl font-semibold">Flight Details</h2>
        </CardHeader>
        <CardBody>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex items-center gap-2">
              <FaPlaneDeparture className="text-gray-500" />
              <Input
                label="From"
                name="from"
                placeholder="Departure city"
                value={formData.from}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center gap-2">
              <FaPlaneArrival className="text-gray-500" />
              <Input
                label="To"
                name="to"
                placeholder="Destination city"
                value={formData.to}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-gray-500" />
              <Input
                label="Departure Date"
                type="date"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-gray-500" />
              <Input
                label="Return Date"
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center gap-2">
              <FaUser className="text-gray-500" />
              <Input
                label="Passengers"
                type="number"
                name="passengers"
                min="1"
                value={formData.passengers.toString()}
                onChange={handleChange}
              />
            </div>
            <Button variant="solid" color="primary" className="mt-4" type="submit">
              Search Flights
            </Button>
          </form>
        </CardBody>
      </Card>
    </section>
  );
}
