/* eslint-disable no-unused-expressions */
/* eslint-disable no-loop-func */

import Goal from './goal';

class GoalsManager {
  constructor(goals = []) {
    this.goals = goals;
    this.info = {
      goals: {
        done: {
          all: 0,
          today: 0,
          week: 0,
          year: 0,
        },
        total: {
          all: goals.length,
          today: 0,
          week: 0,
          year: 0,
        },
      },
    };

    goals.forEach((goal) => {
      if (goal.isDone) this.info.goals.done.all += 1;
      if (goal.isDone) this.info.goals.done[goal.category] += 1;
      this.info.goals.total[goal.category] += 1;
    });
  }

  addGoal(title, category) {
    const goal = new Goal(title, category, false);
    this.goals.push(goal);
    this.info.goals.total.all += 1;
    this.info.goals.total[goal.category] += 1;
  }

  removeGoal(goal) {
    this.goals.splice(this.goals.indexOf(goal), 1);
    this.info.goals.total.all -= 1;
    this.info.goals.total[goal.category] -= 1;
    if (goal.isDone) this.info.goals.done.all -= 1;
    if (goal.isDone) this.info.goals.done[goal.category] -= 1;
  }

  getByCategory(category) {
    return this.goals.filter(element => element.category === category);
  }
}

export default GoalsManager;
