
const warningModal = document.getElementById("warning-modal");

import "./goal";

class GoalsManager {
  constructor(goals, container = document.body){
    this.container = container;
    this.goals = goals,
    this.info = {
      size: {
        done: {
          all: 0,
          today: 0,
          week: 0,
          year: 0
        },
        total: {
          all: goals.length,
          today: 0,
          week: 0,
          year: 0,
        }
      }
    }

    goals.forEach(goal => {
      console.log(goal);
      if(goal.isDone) this.info.size.done.all += 1;
      this.info.size.total[goal.category] += 1;
    });
  }

  getByCategory(category) {
    let goals = this.goals.all;
    return goals.filter((goal) => goal.category === category);
  }

  renderGoals(category = "all"){
    let goals = this.goals;
    for (let index = 0; index < goals.length; index++) {
      const goal = goals[index];
      goal.render(this.container);
    }
  }

  renderInfo(element){
    console.log(element);
  }

  render(){
    this.renderGoals();
    this.renderInfo();
  }
  

}


export default GoalsManager;
