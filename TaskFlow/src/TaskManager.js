export class TaskManager {
  // default empty constructor is used
  // private field #tasks can only be read or modified from inside the TaskManager class itself

  #tasks = [];

  // add a new task to the #tasks array
  add(task) {
    this.#tasks.push(task);
  }

  // remove a task from the #tasks array by id
  remove(id) {
    this.#tasks = this.#tasks.filter(task => task.id !== id);
  }

  // update the status of a task in the #tasks array by id
  updateStatus(id, status) {
    const task = this.#tasks.find(task => task.id === id);
    if (task) {
      task.changeStatus(status);
    }
  }

  getAll() {
    return [...this.#tasks];
  }

  getByStatus(status) {
    return this.#tasks.filter(task => task.status === status);
  }
}
