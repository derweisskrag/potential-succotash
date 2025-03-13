'use server';

export async function getRecommendedFlightsData() {
    const response = await fetch('http://localhost:8080/flights/recommendedFlights', {'cache':'no-store'}); // Fetch flights data from the server
    if (!response.ok) {
        throw new Error("Failed to fetch flights data");
    }
    const data = await response.json();
    return data;
}