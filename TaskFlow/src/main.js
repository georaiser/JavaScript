import { Task } from './Task.js';
import { TaskManager } from './TaskManager.js';
import { loadTasksFromAPI, saveTaskToAPI, saveToStorage, loadFromStorage } from './api.js';

const taskManager = new TaskManager();

// DOM
const colTodo       = document.getElementById('col-todo');
const colInProgress = document.getElementById('col-inprogress');
const colDone       = document.getElementById('col-done');
const countTodo     = document.getElementById('count-todo');
const countInProgress = document.getElementById('count-inprogress');
const countDone     = document.getElementById('count-done');
const btnAddTask    = document.getElementById('btn-add-task');
const formTask      = document.getElementById('form-task');
const inputDesc     = document.getElementById('input-desc');
const inputDate     = document.getElementById('input-date');
const modalEl       = document.getElementById('modal-add');
const modalAdd      = new bootstrap.Modal(modalEl);
const notification  = document.getElementById('notification');
const inputSearch   = document.getElementById('input-search');
const submitBtn     = formTask.querySelector('button[type="submit"]');

// Status config (hoisted — avoids recreating this object on every card render)
const STATUS_MAP = {
  'todo':        { label: 'To Do',       cls: 'status-todo',       col: colTodo },
  'in-progress': { label: 'In Progress', cls: 'status-inprogress', col: colInProgress },
  'done':        { label: 'Done',        cls: 'status-done',       col: colDone }
};

let editingTaskId = null;

// --- 1. Init ---
document.addEventListener('DOMContentLoaded', async () => {
  let tasks = loadFromStorage();
  if (!tasks.length) tasks = await loadTasksFromAPI();

  tasks.forEach(item => {
    const task = new Task({ description: item.description, dueDate: item.dueDate });
    task.id = item.id || task.id;
    if (item.status)    task.status    = item.status;
    if (item.createdAt) task.createdAt = new Date(item.createdAt);
    taskManager.add(task);
  });

  document.getElementById('stats').textContent = 'Ready';
  renderBoard(taskManager.getAll());
  startCountdowns();
});

// --- 2. Render Board ---
function renderBoard(tasks) {
  colTodo.innerHTML = '';
  colInProgress.innerHTML = '';
  colDone.innerHTML = '';

  const counts = { 'todo': 0, 'in-progress': 0, 'done': 0 };

  tasks.forEach(task => {
    const info = STATUS_MAP[task.status] || STATUS_MAP['todo'];
    counts[task.status] = (counts[task.status] || 0) + 1;

    let meta = `<span class="badge-status ${info.cls}">${info.label}</span>`;
    if (task.status === 'done') {
      meta += `<span class="task-date text-success">✔ Completed</span>`;
    } else if (task.dueDate) {
      meta += `<span class="task-countdown" id="countdown-${task.id}">⏱ calculating…</span>`;
    }

    const card = document.createElement('div');
    card.className = `task-card${task.status === 'done' ? ' completed' : ''}`;
    card.draggable = true;
    card.dataset.id = task.id;
    card.innerHTML = `
      <div class="task-desc">${task.description}</div>
      <div class="task-meta w-100">${meta}</div>
      <div class="task-actions mt-2 d-flex gap-2 w-100 justify-content-end">
        <button class="btn btn-outline-light  edit-btn"   style="--bs-btn-padding-y:.1rem;--bs-btn-padding-x:.4rem;--bs-btn-font-size:.75rem">Edit</button>
        <button class="btn btn-outline-danger delete-btn" style="--bs-btn-padding-y:.1rem;--bs-btn-padding-x:.4rem;--bs-btn-font-size:.75rem">Delete</button>
      </div>`;

    card.querySelector('.edit-btn').addEventListener('click', () => openEditModal(task));
    card.querySelector('.delete-btn').addEventListener('click', () => deleteTask(task.id));
    card.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', task.id);
      card.classList.add('dragging');
    });
    card.addEventListener('dragend', () => card.classList.remove('dragging'));

    info.col.appendChild(card);
  });

  countTodo.textContent       = counts['todo']        || 0;
  countInProgress.textContent = counts['in-progress'] || 0;
  countDone.textContent       = counts['done']        || 0;
}

// --- 3. Add / Edit Task ---
btnAddTask.addEventListener('click', () => {
  editingTaskId = null;
  document.getElementById('modal-add-title').textContent = 'New Task';
  formTask.reset();
  modalAdd.show();
});

function openEditModal(task) {
  editingTaskId = task.id;
  document.getElementById('modal-add-title').textContent = 'Edit Task';
  inputDesc.value = task.description;
  inputDate.value = task.dueDate || '';
  modalAdd.show();
}

formTask.addEventListener('submit', async (e) => {
  e.preventDefault();
  const desc = inputDesc.value.trim();
  const date = inputDate.value || null;
  if (!desc) return;

  submitBtn.disabled = true;
  submitBtn.textContent = 'Saving…';

  await new Promise(r => setTimeout(r, 800));

  if (editingTaskId) {
    taskManager.updateTask(editingTaskId, { description: desc, dueDate: date });
    showNotification('Task updated successfully!');
  } else {
    const task = new Task({ description: desc, dueDate: date });
    taskManager.add(task);
    await saveTaskToAPI(task);
    showNotification('Task added successfully!');
  }

  saveToStorage(taskManager.getAll());
  renderBoard(taskManager.getAll());

  formTask.reset();
  submitBtn.disabled = false;
  submitBtn.textContent = 'Add Task';
  modalAdd.hide();
});

// --- 4. Delete Task ---
function deleteTask(id) {
  if (!confirm('Delete this task?')) return;
  taskManager.remove(id);
  saveToStorage(taskManager.getAll());
  renderBoard(taskManager.getAll());
}

// --- 5. Drag and Drop ---
[colTodo, colInProgress, colDone].forEach(col => {
  col.addEventListener('dragover', e => { e.preventDefault(); col.classList.add('drag-over'); });
  col.addEventListener('dragleave', () => col.classList.remove('drag-over'));
  col.addEventListener('drop', e => {
    e.preventDefault();
    col.classList.remove('drag-over');
    const id = e.dataTransfer.getData('text/plain');
    if (!id) return;
    taskManager.updateStatus(id, col.dataset.status);
    saveToStorage(taskManager.getAll());
    renderBoard(taskManager.getAll());
  });
});

// --- 6. Search ---
inputSearch.addEventListener('input', e => {
  const term = e.target.value.toLowerCase();
  renderBoard(taskManager.getAll().filter(t => t.description.toLowerCase().includes(term)));
});

// --- 7. Countdown ---
function startCountdowns() {
  setInterval(() => {
    taskManager.getAll().forEach(task => {
      if (task.status === 'done' || !task.dueDate) return;
      const el = document.getElementById(`countdown-${task.id}`);
      if (!el) return;
      const diff = new Date(task.dueDate) - Date.now();
      if (diff < 0) {
        el.textContent = 'Overdue!';
        el.classList.add('text-danger');
      } else {
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000)  / 60000);
        const s = Math.floor((diff % 60000)    / 1000);
        el.textContent = `⏱ ${d}d ${h}h ${m}m ${s}s`;
        el.classList.remove('text-danger');
      }
    });
  }, 1000);
}

// --- Helpers ---
function showNotification(msg) {
  notification.textContent = msg;
  notification.classList.remove('d-none');
  setTimeout(() => notification.classList.add('d-none'), 2000);
}
