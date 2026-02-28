/**
 * api.js — API consumption + localStorage (Step 5)
 * ──────────────────────────────────────────────────
 * API: JSONPlaceholder — https://jsonplaceholder.typicode.com
 *
 * Functions:
 *
 *   loadTasksFromAPI()
 *     → GET /todos?_limit=5
 *     → Maps items to { description, status } objects
 *     → Returns array, or [] on error
 *
 *   saveTaskToAPI(task)
 *     → POST /todos with JSON body
 *     → Returns response json, or null on error
 *
 *   saveToStorage(tasks)
 *     → JSON.stringify and saves to localStorage key 'taskflow_tasks'
 *
 *   loadFromStorage()
 *     → JSON.parse from localStorage 'taskflow_tasks'
 *     → Returns array, or [] if not found
 *
 * TODO Phase 4:
 *   1. Implement loadTasksFromAPI() with async/await + try/catch
 *   2. Implement saveTaskToAPI(task) with fetch POST
 *   3. Implement saveToStorage(tasks) and loadFromStorage()
 */

const API_URL = 'https://jsonplaceholder.typicode.com';
const STORAGE_KEY = 'taskflow_tasks';

export const loadTasksFromAPI = async () => {
  try {
    const response = await fetch(`${API_URL}/todos?_limit=5`);
    if (!response.ok) throw new Error('API Error');
    const data = await response.json();
    return data.map(item => ({
      description: item.title,
      status: item.completed ? 'done' : 'todo',
      dueDate: null
    }));
  } catch (error) {
    console.error('Failed to load from API', error);
    return [];
  }
};

export const saveTaskToAPI = async (task) => {
  try {
    const response = await fetch(`${API_URL}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    });
    if (!response.ok) throw new Error('API Error');
    return await response.json();
  } catch (error) {
    console.error('Failed to save to API', error);
    return null;
  }
};

export const saveToStorage = (tasks) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Failed to save to storage', error);
  }
};

export const loadFromStorage = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to load from storage', error);
    return [];
  }
};
