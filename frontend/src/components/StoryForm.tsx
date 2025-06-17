import React, { useState } from 'react';
import type { Story } from '../models/Story';
import { addStory } from '../services/api';

interface Props { onAdd: () => void; }

const StoryForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addStory({ title, content })
      .then(() => {
        setTitle('');
        setContent('');
        onAdd();
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      />
      <button type="submit">Add Story</button>
    </form>
  );
};

export default StoryForm;