package com.borrowbuddy.skills.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/skills")
public class SkillController {

    @Autowired
    private SkillService skillService;

    @GetMapping("/{skillId}")
    public SkillDTO getSkillById(@PathVariable UUID skillId) {
        return skillService.getSkillById(skillId);
    }

    @GetMapping
    public List<SkillDTO> getAllSkills() {
        return skillService.getAllSkills();
    }

    @PostMapping
    public SkillDTO createSkill(@RequestBody CreateSkillRequest request) {
        return skillService.createSkill(request);
    }

    @PutMapping("/{skillId}")
    public SkillDTO updateSkill(@PathVariable UUID skillId, @RequestBody UpdateSkillRequest request) {
        return skillService.updateSkill(skillId, request);
    }

    @DeleteMapping("/{skillId}")
    public void deleteSkill(@PathVariable UUID skillId) {
        skillService.deleteSkill(skillId);
    }
}
