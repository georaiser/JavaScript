export class Task {
  constructor({ description, dueDate }) {
    this.id = String(Date.now()); // String ID avoids type-mismatch bugs
    this.description = description;
    this.status = 'todo';
    this.createdAt = new Date();
    this.dueDate = dueDate || null;
  }

  changeStatus(newStatus) {
    this.status = newStatus;
  }

  updateDetails({ description, dueDate }) {
    this.description = description;
    this.dueDate = dueDate || null;
  }

  isDone() {
    return this.status === 'done';
  }
}
