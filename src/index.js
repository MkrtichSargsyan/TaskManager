import "../node_modules/normalize.css";
import "./css/style.css";
import "./css/customStyles.css";
import generateImages from "./generateImages";
import Goal from "./models/goal";
import showGoal from "./showGoal";
generateImages;

// document.onreadystatechange = function () {
//   var state = document.readyState
//   if (state == 'interactive') {
//        document.getElementById('contents').style.visibility="hidden";
//        document.getElementById('loading').style.visibility="visible";

//   } else if (state == 'complete') {
//     document.getElementById('loading').style.visibility="hidden";
//       setTimeout(function(){
//          document.getElementById('interactive');
//          document.getElementById('load').style.visibility="hidden";
//          document.getElementById('contents').style.visibility="visible";
//       },1000);
//   }
// }

const openModal = document.getElementById("open-modal-btn");
const closeModal = document.getElementsByClassName("close-modal");
const addGoalBtn = document.getElementById("add-goal-btn");
const sidebarLinks = Array.from(document.getElementById('sidebar-links').getElementsByTagName('li'));
const goalsContainer = document.getElementById("goals-container");

const modal = document.getElementById("modal");

openModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

for (let index = 0; index < closeModal.length; index++) {
  const element = closeModal[index];
  element.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
}


// -------------------------
let goals = [];

const goal1 = new Goal("Goal 1", "all");
const goal2 = new Goal("Goal 2", "today");
const goal3 = new Goal("Goal 3", "week");
const goal4 = new Goal("Goal 4", "year");
const goal5 = new Goal("Goal 5", "year");

goals.push(goal1);
goals.push(goal2);
goals.push(goal3);
goals.push(goal4);
goals.push(goal5);

goals.forEach(goal=>{
  showGoal(goal)
})

sidebarLinks.forEach(link=>{

  link.addEventListener('click',()=>{
    goalsContainer.innerHTML = "";

    let text = link.getElementsByTagName('h3')[0].innerHTML.split(' ')[0].toLowerCase()
    let filteredGoals = text === 'all'  ?  goals : goals.filter(goal=>goal.category === text)
    filteredGoals.forEach(goal=>{
      showGoal(goal)
    })
  })
})

// --------------------------------

const goalForm = {
  title: document.getElementById("goal-title"),
  category: document.getElementById("goal-category"),
};

addGoalBtn.addEventListener("click", () => {
  const goal = new Goal(goalForm.title.value, goalForm.category.value);
  showGoal(goal)
  modal.classList.add("hidden");
});
