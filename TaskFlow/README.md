# 📋 TaskFlow — Task Manager

_Module #4 Evaluation — Advanced JavaScript · Alkemy_

---

## What does it do?

A Kanban-style task manager. Tasks move across three columns — **To Do → In Progress → Done** — via drag and drop.

---

## Project Structure

```
TaskFlow/
├── index.html          ← Kanban board UI (Bootstrap 5)
├── style.css           ← Custom card & column styles
└── src/
    ├── Task.js         ← Task class
    ├── TaskManager.js  ← Task manager
    ├── api.js          ← fetch() + localStorage
    └── main.js         ← DOM, events, drag & drop, async
```

---

## Evaluation Coverage

| Step                                                                  | Where                       |
| --------------------------------------------------------------------- | --------------------------- |
| OOP — `Task` class + `TaskManager`                                    | `Task.js`, `TaskManager.js` |
| DOM Events — submit, click, drag/drop, keyup, mouseover               | `main.js`                   |
| Async — setTimeout (add delay), setInterval (countdown), notification | `main.js`                   |
| API — fetch + localStorage + try/catch                                | `api.js`                    |

---

## How to Run

No build tools needed — just a local server (ES modules require one):

```bash
npx serve .
# or VS Code Live Server
```

---

## API

[JSONPlaceholder](https://jsonplaceholder.typicode.com) — free, no signup required.

- `GET /todos?_limit=5` → seed initial tasks on load
- `POST /todos` → simulate saving a new task

---

_Alkemy — Advanced JavaScript Module #4_
