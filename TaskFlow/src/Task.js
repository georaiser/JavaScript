export class Task {
  constructor({ description, dueDate }) {
    this.id = Date.now();
    this.description = description;
    this.status = 'todo';
    this.createdAt = new Date();
    this.dueDate = dueDate;
  }

  changeStatus(newStatus) {
    this.status = newStatus;
  }

  isDone() {
    return this.status === 'done';
  }

  getSummary() {
    return `${this.description} - ${this.status} - ${this.createdAt} - ${this.dueDate}`;
  }
}
