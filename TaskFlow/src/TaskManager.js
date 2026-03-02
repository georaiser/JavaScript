export class TaskManager {
  #tasks = [];

  add(task) {
    this.#tasks.push(task);
  }

  remove(id) {
    this.#tasks = this.#tasks.filter(task => task.id !== id);
  }

  updateStatus(id, status) {
    const task = this.#tasks.find(task => task.id === id);
    if (task) task.changeStatus(status);
  }

  updateTask(id, { description, dueDate }) {
    const task = this.#tasks.find(task => task.id === id);
    if (task) task.updateDetails({ description, dueDate });
  }

  getAll() {
    return [...this.#tasks];
  }
}
