
const warningModal = document.getElementById("warning-modal");
import "./goal";
import Goal from "./goal";

class GoalsManager {
  constructor(goals, container = document.body){
    this.container = container;
    this.goals = goals,
    this.info = {
      container: {          
        all: document.getElementById("goals-all"),
        today: document.getElementById("goals-today"),
        week: document.getElementById("goals-week"),
        year: document.getElementById("goals-year"),
      },
      goals: {
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
    this.buttons = {
      addGoal: document.getElementById("add-goal-btn"),
      removeGoal: document.getElementById("remove-goal-btn")
    }

    goals.forEach(goal => {
      if(goal.isDone) this.info.goals.done.all += 1;
      this.info.goals.total[goal.category] += 1;
    });
  }

  getByCategory(category) {
    let goals = this.goals.all;
    return goals.filter((goal) => goal.category === category);
  }

  addGoal(title, category){
    const goal = new Goal(title, category, false);
    this.goals.push(goal);
    this.info.goals.total.all += 1;
    this.info.goals.total[goal.category] += 1;
    this.renderGoal(goal);
    this.updateInfo();
  }

  setGoalIsDone(goal, isDone){
    goal.isDone = isDone;

  }

  renderGoals(category = "all"){
    let goals = this.goals;
    for (let index = 0; index < goals.length; index++) {
      const goal = goals[index];
      this.renderGoal(goal, index);
    }
  }

  renderGoal(goal, index){
    goal.render(this.container).then(
      (node) => {
        node.id = "goal-manager-item-" + index;
        const removeGoalBtn = node.querySelector('.remove-goal-btn');
        const isDoneInput = node.querySelector('.goal-is-done-checkbox');
        
        removeGoalBtn.dataset.index = index;
        isDoneInput.addEventListener('change', (e) => {
          const isDone = e.target.checked;
          this.goals[index].isDone = isDone; 
          isDone ? this.info.goals.done.all += 1 : this.info.goals.done.all -= 1;
          isDone ? this.info.goals.done[goal.category] += 1 : this.info.goals.done[goal.category] -= 1;
          this.updateInfo();
        });

        

        removeGoalBtn.dataset.index = index;
        removeGoalBtn.addEventListener('click', (e) => {
          this.selected = this.goals[index];

          console.log(this);
          warningModal.classList.remove("hidden");
        });
      }
    );

  }

  updateInfo(){
    if(this.info.container.all) this.info.container.all.innerHTML = `${this.info.goals.done.all}/${this.info.goals.total.all}`;
    if(this.info.container.today) this.info.container.today.innerHTML = `${this.info.goals.done.today}/${this.info.goals.total.today}`;
    if(this.info.container.week) this.info.container.week.innerHTML = `${this.info.goals.done.week}/${this.info.goals.total.week}`;
    if(this.info.container.year) this.info.container.year.innerHTML = `${this.info.goals.done.year}/${this.info.goals.total.year}`;
  }

  render(){
    this.renderGoals();
    this.updateInfo();
  }
  

}


export default GoalsManager;
