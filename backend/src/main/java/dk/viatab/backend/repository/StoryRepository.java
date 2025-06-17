package dk.viatab.backend.repository;

import dk.viatab.backend.model.Story;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoryRepository extends JpaRepository<Story, Long> {
}