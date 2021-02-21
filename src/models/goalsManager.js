const goalsContainer = document.getElementById("goals-container");
const warningModal = document.getElementById("warning-modal");

import "./goal";

class GoalsManager {
  constructor(goals){
    this.goals = {
      all: goals,
      done: [],
      today: {
        all: [],
        done: [],
      },
      week: {
        all: [],
        done: [],
      },
      year: {
        all: [],
        done: [],
      }
    }
    goals.forEach(goal => {
      if(goal.isDone) this.goals.done.push(goal);
      switch (goal.category) {
        case "today":
          this.goals.today.all.push(goal);
          if (goal.isDone) this.goals.today.done.push(goal) 
          break;
        case "week":
          this.goals.week.all.push(goal);
          if (goal.isDone) this.goals.week.done.push(goal) 
          break;
        case "year":
          this.goals.year.all.push(goal);
          if (goal.isDone) this.goals.year.done.push(goal) 
          break;
      
        default:
          break;
      }
    });
  }

  render(category = "all"){
    let goals = this.goals[category];
    for (let index = 0; index < goals.length; index++) {
      const goal = goals[index];
      goal.render(goalsContainer);
      
    }
  }
}


export default GoalsManager;
