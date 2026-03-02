// api.js — JSONPlaceholder API + localStorage
const API_URL = 'https://jsonplaceholder.typicode.com';
const STORAGE_KEY = 'taskflow_tasks';

export const loadTasksFromAPI = async () => {
  try {
    const res = await fetch(`${API_URL}/todos?_limit=5`);
    if (!res.ok) throw new Error('Fetch failed');
    const data = await res.json();
    return data.map(item => ({
      id: String(item.id),
      description: item.title, // ← this is where "delectus aut autem" comes from
      status: item.completed ? 'done' : 'todo',
      dueDate: null
    }));
  } catch (err) {
    console.error('loadTasksFromAPI:', err);
    return [];
  }
};

export const saveTaskToAPI = async (task) => {
  try {
    const res = await fetch(`${API_URL}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    });
    if (!res.ok) throw new Error('Post failed');
    return await res.json();
  } catch (err) {
    console.error('saveTaskToAPI:', err);
    return null;
  }
};

export const saveToStorage = (tasks) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (err) {
    console.error('saveToStorage:', err);
  }
};

export const loadFromStorage = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('loadFromStorage:', err);
    return [];
  }
};
