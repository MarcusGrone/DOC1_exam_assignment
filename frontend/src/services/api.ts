import axios, { AxiosResponse } from 'axios';
import { Story } from '../models/Story';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api/stories';

export const fetchStories = (): Promise<AxiosResponse<Story[]>> => {
  return axios.get<Story[]>(API_URL);
};

export const addStory = (story: Omit<Story, 'id'>): Promise<AxiosResponse<Story>> => {
  return axios.post<Story>(API_URL, story);
};

export const deleteStory = (id: number): Promise<AxiosResponse<void>> => {
  return axios.delete<void>(`${API_URL}/${id}`);
};