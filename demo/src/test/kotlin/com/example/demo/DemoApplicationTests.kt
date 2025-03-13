package com.example.demo

import com.example.demo.entities.Flight
import junit.framework.TestCase.assertEquals
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.boot.test.web.client.exchange
import org.springframework.boot.test.web.server.LocalServerPort
import org.springframework.context.annotation.Import
import org.springframework.http.HttpMethod
import org.springframework.http.HttpStatus


@Import(TestcontainersConfiguration::class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class DemoApplicationTests {

    @LocalServerPort
    private var port: Int = 0

    @Autowired
    lateinit var restTemplate: TestRestTemplate

    @Test
    fun testGetFlights(){
        val response = restTemplate.exchange("http://localhost:$port/flights/flights", HttpMethod.GET, null, Array<Flight>::class.java)
        Assertions.assertEquals(HttpStatus.OK, response.statusCode)
        Assertions.assertEquals(5, response.body?.size)
    }

    @Test
    fun testFurinaSecret(){
        val response = restTemplate.exchange("http://localhost:$port/Furina/secret", HttpMethod.GET, null, String::class.java)
        Assertions.assertEquals(HttpStatus.OK, response.statusCode)
        Assertions.assertEquals("Greetings!", response.body)
    }

    @Test
    fun testFurinaHello(){
        val response = restTemplate.exchange("http://localhost:$port/Furina/hello", HttpMethod.GET, null, String::class.java)
        Assertions.assertEquals(HttpStatus.OK, response.statusCode)
        Assertions.assertEquals("Greetings from Furina with Spring Boot!", response.body)
    }

    @Test
    fun contextLoads() {
    }
}
