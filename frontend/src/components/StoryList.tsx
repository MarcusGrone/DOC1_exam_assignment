import React, { useEffect, useState } from 'react';
import type { AxiosResponse } from 'axios';
import { Story } from '../models/Story';
import { fetchStories, deleteStory } from '../services/api';
import StoryForm from './StoryForm';

const StoryList: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);

  const load = () =>
    fetchStories()
      .then((res: AxiosResponse<Story[]>) => setStories(res.data))
      .catch(err => console.error(err));

  useEffect(() => { load(); }, []);

  const handleDelete = (id?: number) => {
    if (id) {
      deleteStory(id)
        .then(() => load())
        .catch(err => console.error(err));
    }
  };

  return (
    <div>
      <h1>Stories</h1>
      <StoryForm onAdd={load} />
      <ul>
        {stories.map(s => (
          <li key={s.id}>
            <strong>{s.title}</strong>: {s.content}
            <button onClick={() => handleDelete(s.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoryList;