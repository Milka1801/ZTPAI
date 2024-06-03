package com.example.borrowbuddy.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ContentController{
    @GetMapping("/home")
    public String handleWelcome()
    {
        return "home";
    }

}
