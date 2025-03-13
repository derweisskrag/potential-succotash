'use client';

import { useState, useEffect } from 'react';
import { getFlights } from '@/server/getFlights';
import { getRecommendedFlightsData } from '@/server/getRecommendedFlights';
import Image from 'next/image';
import Link from 'next/link';
import { title } from './primitives';

export default function FlightGrid() {
  const [flights, setFlights] = useState([]);
  const [recommendedFlights, setRecommendedFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const flightData = await getFlights();
        const recommendedFlightsData = await getRecommendedFlightsData();

        setFlights(flightData);
        setRecommendedFlights(recommendedFlightsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching flights:', error);
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  return (
    <>
      {loading ? (
        <p className="text-xl text-gray-600">Loading flights...</p>
      ) : (
        <div className="w-full max-w-4xl">
          {flights.length > 0 ? (
            <>
              <h2 className="text-2xl font-semibold text-white-800 mb-6">
                Available Flights
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {flights.map((flight: any) => (
                  <li
                    key={flight.id}
                    className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
                      flight.duration > 10 ? 'col-span-2' : ''
                    }`}
                  >
                    <Link
                      href={{
                        pathname: '/book-flight',
                        query: {
                          flightNumber: flight.flightNumber,
                          departure: flight.departure,
                          arrival: flight.arrival,
                          price: flight.price,
                          duration: flight.duration,
                        },
                      }}
                    >
                      <h3 className="text-2xl font-semibold text-gray-800">
                        {flight.flightNumber}
                      </h3>
                      <p className="text-lg text-gray-600">
                        {flight.departure} → {flight.arrival}
                      </p>
                      <p className="text-lg text-gray-600">
                        Price: <span className="font-bold text-green-600">${flight.price}</span>
                      </p>
                      <p className="text-lg text-gray-600">
                        Duration: <span className="font-bold">{flight.duration} hours</span>
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-xl text-gray-500">No flights available</p>
          )}

          {recommendedFlights.length > 0 && (
            <>
              <h2 className={`text-2xl font-semibold text-white-800 mt-12 mb-6 my-6`}>
                Recommended Flights
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {recommendedFlights.map((flight: any) => (
                  <li
                    key={flight.id}
                    className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
                      flight.duration > 10 ? 'col-span-2' : ''
                    }`}
                  >
                    <Link
                      href={{
                        pathname: '/book-flight',
                        query: {
                          flightNumber: flight.flightNumber,
                          departure: flight.departure,
                          arrival: flight.arrival,
                          price: flight.price,
                          duration: flight.duration,
                        },
                      }}
                    >
                      <h3 className="text-2xl font-semibold text-gray-800">
                        {flight.flightNumber}
                      </h3>
                      <p className="text-lg text-gray-600">
                        {flight.departure} → {flight.arrival}
                      </p>
                      <p className="text-lg text-gray-600">
                        Price: <span className="font-bold text-green-600">${flight.price}</span>
                      </p>
                      <p className="text-lg text-gray-600">
                        Duration: <span className="font-bold">{flight.duration} hours</span>
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </>
  );
}

