class Goal {
  constructor(title, category, isDone = false, steps = []) {
    this.title = title;
    this.category = category;
    this.isDone = isDone;
    this.steps = steps;
  }
}

export default Goal;
