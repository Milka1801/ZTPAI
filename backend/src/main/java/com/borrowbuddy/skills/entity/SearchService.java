package com.borrowbuddy.skills.entity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class SearchService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SkillRepository skillRepository;

    public List<UserDTO> searchUsers(String query) {
        List<User> users = userRepository.findByUsernameContainingIgnoreCase(query);
        return UserMapper.toUserDTOList(users);
    }

    public List<SkillDTO> searchSkills(String query) {
        List<Skill> skills = skillRepository.findByNameContainingIgnoreCase(query);
        return SkillMapper.toSkillDTOList(skills);
    }
}
