package com.borrowbuddy.skills.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/search")
public class SearchController {

    @Autowired
    private SearchService searchService;

    @GetMapping("/users")
    public List<UserDTO> searchUsers(@RequestParam String query) {
        return searchService.searchUsers(query);
    }

    @GetMapping("/skills")
    public List<SkillDTO> searchSkills(@RequestParam String query) {
        return searchService.searchSkills(query);
    }


}
