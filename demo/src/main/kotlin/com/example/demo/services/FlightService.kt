package com.example.demo.services

import com.example.demo.entities.Flight
import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.core.io.ClassPathResource
import org.springframework.stereotype.Service

@Service
class FlightService {
    private val objectMapper = ObjectMapper()

    val flights by lazy {
        val resource = ClassPathResource("flights.json")
        val flightList = objectMapper.readValue(resource.inputStream, Array<Flight>::class.java).toList()
        flightList
    }

    // Rename the method to avoid name clash
    fun fetchFlights(): List<Flight> {
        return flights
    }

    fun recommendFlights(): List<Flight> {
        return flights.sortedWith(compareBy<Flight> { it.price }.thenBy { it.duration })
    }
}
