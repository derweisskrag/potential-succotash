package com.example.demo.entities

data class Flight(
    val id: Int,
    val flightNumber: String,
    val departure: String,
    val arrival: String,
    val departureTime: String,
    val arrivalTime: String,
    val price: Int,
    val duration: Int,
    val airline: String,
    val stops: Int = 0,
    val aircraft: String = "Unknown",
    val classType: String = "Economy",
    val gate: String = "A1",
    val status: String = "On Time"
) {
    // Required for Jackson
    constructor() : this(0, "", "", "", "", "", 0, 0, "", 0, "", "", "", "")
}
