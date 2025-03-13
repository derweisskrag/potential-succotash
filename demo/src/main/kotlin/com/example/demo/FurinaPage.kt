package com.example.demo

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class FurinaController {
    @GetMapping("/Furina/furina")
    fun showHomePage(): String {
        return "furina"  // This looks for home.html in the templates folder
    }
}