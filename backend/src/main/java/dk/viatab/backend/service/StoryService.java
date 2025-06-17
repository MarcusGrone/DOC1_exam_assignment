package dk.viatab.backend.service;

import dk.viatab.backend.model.Story;
import dk.viatab.backend.repository.StoryRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StoryService {
    private final StoryRepository repo;
    public StoryService(StoryRepository repo) { this.repo = repo; }
    public List<Story> findAll() { return repo.findAll(); }
    public Story save(Story s) { return repo.save(s); }
    public void deleteById(Long id) { repo.deleteById(id); }
}