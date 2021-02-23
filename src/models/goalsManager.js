import Goal from "./goal";
const sidebarLinks = Array.from(
  document.getElementById("sidebar-links").getElementsByTagName("li")
);

const a = document.getElementsByClassName("draggable")[0];

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
        warningModal: document.getElementById("warning-modal"),
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
      },
    }

    goals.forEach(goal => {
      if(goal.isDone) this.info.goals.done.all += 1;
      if(goal.isDone) this.info.goals.done[goal.category] += 1;
      this.info.goals.total[goal.category] += 1;
    });
  }

  getByCategory(category) {
    return this.goals.filter((goal) => goal.category === category);
  }

  addGoal(title, category){
    const goal = new Goal(title, category, false);
    this.goals.push(goal);
    this.info.goals.total.all += 1;
    this.info.goals.total[goal.category] += 1;
    this.renderGoals();
    this.updateInfo();
    sidebarLinks.forEach((link) => link.classList.remove("bg-gray-200"));
    this.info.container.all.parentNode.classList.add("bg-gray-200");
  }

  removeGoal(){
    const index = this.selected.index
    this.goals.splice(index, 1);
    this.renderGoals();
    // document.getElementById("goal-manager-item-" + index).remove();
    this.info.goals.total.all -= 1;
    this.info.goals.total[this.selected.goal.category] -= 1;
    if(this.selected.goal.isDone) this.info.goals.done.all -= 1;
    if(this.selected.goal.isDone) this.info.goals.done[this.selected.goal.category] -= 1;
    delete this.selected;
    this.updateInfo();
    sidebarLinks.forEach((link) => link.classList.remove("bg-gray-200"));
    this.info.container.all.parentNode.classList.add("bg-gray-200");
    
  }

  setGoalIsDone(goal, isDone){
    goal.isDone = isDone;

  }

  renderGoals(category = "all"){
    this.container.innerHTML = "";
    let goals = this.goals;
    for (let index = 0; index < goals.length; index++) {
      const goal = goals[index];
      this.renderGoal(goal, index);
    }
  }

  showByCategory(category){
    for (let index = 0; index < this.goals.length; index++) {
      const goal = this.goals[index];
      const id = "goal-manager-item-" + index;
      if(category !== "all" && goal.category !== category){
        document.getElementById(id).classList.add("hidden");
      } else {
        document.getElementById(id).classList.remove("hidden");
      }
    }
  }

  renderGoal(goal, index){
    goal.render(this.container).then(
      (node) => {
        node.id = "goal-manager-item-" + index;
        const removeGoalBtn = node.querySelector('.remove-goal-btn');
        const isDoneInput = node.querySelector('.goal-is-done-checkbox');
        const selectGoal = node.querySelector('.select-goal');
        const selectGoalLink = node.querySelector('.select-goal-link');
        
        removeGoalBtn.dataset.index = index;
        isDoneInput.addEventListener('change', (e) => {
          const isDone = e.target.checked;
          this.goals[index].isDone = isDone; 
          isDone ? this.info.goals.done.all += 1 : this.info.goals.done.all -= 1;
          isDone ? this.info.goals.done[goal.category] += 1 : this.info.goals.done[goal.category] -= 1;
          this.updateInfo();
          console.log(this);
        });

        removeGoalBtn.dataset.index = index;
        removeGoalBtn.addEventListener('click', (e) => {
          console.log("remove");
          this.selected = {
            goal: this.goals[index],
            index: index
          }
          this.info.container.warningModal.classList.remove("hidden");
        });

        selectGoal.addEventListener("click", (e) => {
          this.selectGoal(goal, index);
        });
        selectGoalLink.addEventListener("click", (e) => {
          this.selectGoal(goal, index);
        });

      }
    );

  }

  selectGoal(goal, index){
    this.renderSteps(goal, document.getElementById("steps-undone"));
  }

  renderSteps(goal, container){
    container.innerHTML = "";
    let node = document.createElement("div");
    console.log(goal);
    let html = `
    <div id="draggable" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)"
          class="draggable bg-white hover-trigger p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter flex justify-between">
          <p>${goal.steps[0].text}</p>
          <div id='icon' class='hover-target justify-between'>
            <img class='mr-2 transition duration-500 ease-in-out hover:bg-gray-100 transform  hover:scale-150'
              src="https://img.icons8.com/dotty/16/000000/edit.png" />
            <img class='transition duration-500 ease-in-out hover:bg-gray-100 transform  hover:scale-150'
              src="https://img.icons8.com/dotty/16/000000/trash.png" />
          </div>
        </div>
    `;
    node.innerHTML = html;
    console.log("???");
    container.appendChild(node);
  }

  updateInfo(){
    if(this.info.container.all) this.info.container.all.innerHTML = `${this.info.goals.done.all} of ${this.info.goals.total.all}`;
    if(this.info.container.today) this.info.container.today.innerHTML = `${this.info.goals.done.today} of ${this.info.goals.total.today}`;
    if(this.info.container.week) this.info.container.week.innerHTML = `${this.info.goals.done.week} of ${this.info.goals.total.week}`;
    if(this.info.container.year) this.info.container.year.innerHTML = `${this.info.goals.done.year} of ${this.info.goals.total.year}`;
  }

  render(){
    this.renderGoals();
    this.updateInfo();
  }
  

}


export default GoalsManager;
