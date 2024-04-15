package com.borrowbuddy.skills.controllers;
import com.borrowbuddy.skills.entity.User;
import com.borrowbuddy.skills.service.User.UserImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{userId}")
    public UserDTO getUserById(@PathVariable UUID userId) {
        return userService.getUserById(userId);
    }

    @GetMapping
    public List<UserDTO> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping
    public UserDTO createUser(@RequestBody CreateUserRequest request) {
        return userService.createUser(request);
    }

    @PutMapping("/{userId}")
    public UserDTO updateUser(@PathVariable UUID userId, @RequestBody UpdateUserRequest request) {
        return userService.updateUser(userId, request);
    }

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable UUID userId) {
        userService.deleteUser(userId);
    }

    @GetMapping("/{userId}/skills")
    public List<SkillDTO> getUserSkills(@PathVariable UUID userId) {
        return userService.getUserSkills(userId);
    }

    @PostMapping("/{userId}/skills")
    public SkillDTO addSkillToUser(@PathVariable UUID userId, @RequestBody AddSkillRequest request) {
        return userService.addSkillToUser(userId, request);
    }

    @DeleteMapping("/{userId}/skills/{skillId}")
    public void removeSkillFromUser(@PathVariable UUID userId, @PathVariable UUID skillId) {
        userService.removeSkillFromUser(userId, skillId);
    }
}
}