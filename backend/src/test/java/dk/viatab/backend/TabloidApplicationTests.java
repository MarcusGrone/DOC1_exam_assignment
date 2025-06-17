package dk.viatab.backend;

import dk.viatab.backend.model.Story;
import dk.viatab.backend.repository.StoryRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class TabloidApplicationTests {

    @Autowired
    private StoryRepository repository;

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void contextLoads() {
        assertThat(repository).isNotNull();
    }

    @Test
    public void repositoryCrudOperations() {
        Story s = new Story();
        s.setTitle("Test");
        s.setContent("Content");
        Story saved = repository.save(s);
        assertThat(repository.findById(saved.getId())).isPresent();
        repository.deleteById(saved.getId());
        assertThat(repository.findById(saved.getId())).isNotPresent();
    }

    @Test
    public void restApiGetStories() throws Exception {
        mockMvc.perform(get("/api/stories"))
               .andExpect(status().isOk());
    }
}