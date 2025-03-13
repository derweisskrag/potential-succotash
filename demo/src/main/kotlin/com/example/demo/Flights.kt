package com.example.demo

import com.example.demo.entities.Flight
import com.example.demo.services.FlightService
import org.springframework.web.bind.annotation.*

data class BookingRequest(
    val from: String,
    val to: String,
    val departureDate: String,
    val returnDate: String,
    val passengers: Int
)

@RestController
@RequestMapping("/flights")
class FlightController(private val flightService: FlightService){
    @GetMapping("/flights")
    fun getFlights(): List<Flight> {
        return flightService.fetchFlights()
    }

    // Endpoint to get recommended flights
    @GetMapping("/recommendedFlights")
    fun getRecommendedFlights(): List<Flight> {
        return flightService.recommendFlights()
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @PostMapping("/book-flight")
    fun bookFlight(@RequestBody bookingRequest: BookingRequest): String {
        println("Booking request received: $bookingRequest")

        return "Booked the flight!"
    }
}