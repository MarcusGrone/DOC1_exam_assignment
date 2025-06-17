package dk.viatab.backend.controller;

import dk.viatab.backend.model.Story;
import dk.viatab.backend.service.StoryService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/stories")
@CrossOrigin(origins = "*")
public class StoryController {
    private final StoryService service;
    public StoryController(StoryService service) { this.service = service; }

    @GetMapping
    public List<Story> all() { return service.findAll(); }

    @PostMapping
    public Story create(@RequestBody Story story) { return service.save(story); }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) { service.deleteById(id); }
}