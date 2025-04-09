'use server';

import {baseURL} from "@/server/get_url";

export async function getFlights() {
    const response = await fetch(`${baseURL}/flights/flights`, {'cache':'no-store'}); // Fetch flights data from the server
    if (!response.ok) {
        throw new Error("Failed to fetch flights data");
    }
    const data = await response.json();
    return data;
}