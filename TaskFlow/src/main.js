import { Task } from './Task.js';
import { TaskManager } from './TaskManager.js';
import { loadTasksFromAPI, saveTaskToAPI, saveToStorage, loadFromStorage } from './api.js';

const taskManager = new TaskManager();

// DOM Elements
const colTodo = document.getElementById('col-todo');
const colInProgress = document.getElementById('col-inprogress');
const colDone = document.getElementById('col-done');

const countTodo = document.getElementById('count-todo');
const countInProgress = document.getElementById('count-inprogress');
const countDone = document.getElementById('count-done');

const btnAddTask = document.getElementById('btn-add-task');
const formTask = document.getElementById('form-task');
const inputDesc = document.getElementById('input-desc');
const inputDate = document.getElementById('input-date');
const modalAdd = new bootstrap.Modal(document.getElementById('modal-add'));
const notification = document.getElementById('notification');
const inputSearch = document.getElementById('input-search');

// --- 1. Initialization ---
document.addEventListener('DOMContentLoaded', async () => {
  let loadedTasks = loadFromStorage();
  
  if (!loadedTasks || loadedTasks.length === 0) {
    loadedTasks = await loadTasksFromAPI();
  }
  
  // Rehydrate Task objects
  if (loadedTasks) {
    loadedTasks.forEach(item => {
      const task = new Task({ description: item.description, dueDate: item.dueDate });
      // Restore previous state if available
      if (item.id) task.id = item.id;
      if (item.status) task.status = item.status;
      if (item.createdAt) task.createdAt = new Date(item.createdAt);
      taskManager.add(task);
    });
  }

  document.getElementById('stats').textContent = 'Ready';
  renderBoard(taskManager.getAll());
  startCountdowns();
});

// --- 2. Render Board ---
function renderBoard(tasks) {
  // Clear columns
  colTodo.innerHTML = '';
  colInProgress.innerHTML = '';
  colDone.innerHTML = '';

  let todoCount = 0;
  let inProgressCount = 0;
  let doneCount = 0;

  tasks.forEach(task => {
    // Create mapping for UI styles
    const statusMap = {
      'todo': { label: 'To Do', class: 'status-todo', col: colTodo },
      'in-progress': { label: 'In Progress', class: 'status-inprogress', col: colInProgress },
      'done': { label: 'Done', class: 'status-done', col: colDone }
    };
    
    // Fallback just in case
    const statusInfo = statusMap[task.status] || statusMap['todo'];

    if (task.status === 'todo') todoCount++;
    else if (task.status === 'in-progress') inProgressCount++;
    else if (task.status === 'done') doneCount++;

    const card = document.createElement('div');
    card.className = `task-card ${task.status === 'done' ? 'completed' : ''}`;
    card.draggable = true;
    card.dataset.id = task.id; // Store ID for drag/drop
    
    let metaHtml = `<span class="badge-status ${statusInfo.class}">${statusInfo.label}</span>`;
    
    if (task.status === 'done') {
      metaHtml += `<span class="task-date text-success">✔ Completed</span>`;
    } else if (task.dueDate) {
      metaHtml += `<span class="task-countdown" id="countdown-${task.id}">⏱ calculating…</span>`;
    }

    card.innerHTML = `
      <div class="task-desc">${task.description}</div>
      <div class="task-meta">${metaHtml}</div>
    `;

    // Drag events
    card.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', task.id);
      card.classList.add('dragging');
    });

    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
    });

    statusInfo.col.appendChild(card);
  });

  // Update counters
  countTodo.textContent = todoCount;
  countInProgress.textContent = inProgressCount;
  countDone.textContent = doneCount;
}

// --- 3. Add Task ---
btnAddTask.addEventListener('click', () => {
  modalAdd.show();
});

formTask.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const desc = inputDesc.value.trim();
  const date = inputDate.value;
  
  if (!desc) return;
  
  const submitBtn = formTask.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Adding...';
  
  const newTask = new Task({ description: desc, dueDate: date || null });
  
  // Simulate delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  taskManager.add(newTask);
  
  // Attempt to save to API and Storage
  await saveTaskToAPI(newTask);
  saveToStorage(taskManager.getAll());
  
  // Notification
  notification.textContent = 'Task added successfully!';
  notification.classList.remove('d-none');
  setTimeout(() => notification.classList.add('d-none'), 2000);
  
  renderBoard(taskManager.getAll());
  
  formTask.reset();
  submitBtn.disabled = false;
  submitBtn.textContent = 'Add Task';
  modalAdd.hide();
});

// --- 4. Drag and Drop ---
[colTodo, colInProgress, colDone].forEach(col => {
  col.addEventListener('dragover', (e) => {
    e.preventDefault(); // Allow drop
    col.classList.add('drag-over');
  });

  col.addEventListener('dragleave', () => {
    col.classList.remove('drag-over');
  });

  col.addEventListener('drop', (e) => {
    e.preventDefault();
    col.classList.remove('drag-over');
    
    const taskId = e.dataTransfer.getData('text/plain');
    if (!taskId) return;
    
    const newStatus = col.dataset.status; // 'todo', 'in-progress', or 'done'
    taskManager.updateStatus(Number(taskId), newStatus);
    
    saveToStorage(taskManager.getAll());
    renderBoard(taskManager.getAll());
  });
});

// --- 5. Search ---
inputSearch.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredTasks = taskManager.getAll().filter(task => 
    task.description.toLowerCase().includes(searchTerm)
  );
  renderBoard(filteredTasks);
});

// --- 6. Countdowns ---
function startCountdowns() {
  setInterval(() => {
    const allTasks = taskManager.getAll();
    allTasks.forEach(task => {
      if (task.status === 'done' || !task.dueDate) return;
      
      const el = document.getElementById(`countdown-${task.id}`);
      if (!el) return;
      
      const now = new Date();
      const due = new Date(task.dueDate);
      const diffMs = due - now;
      
      if (diffMs < 0) {
        el.textContent = 'Overdue!';
        el.classList.add('text-danger');
      } else {
        const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diffMs / 1000 / 60) % 60);
        const secs = Math.floor((diffMs / 1000) % 60);
        
        el.textContent = `⏱ ${days}d ${hours}h ${mins}m ${secs}s`;
        el.classList.remove('text-danger');
      }
    });
  }, 1000);
}
