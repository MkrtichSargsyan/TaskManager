import "../node_modules/normalize.css";
import "./css/style.css";
import "./css/customStyles.css";
import generateImages from "./generateImages";
import Goals from "./models/goalsManager";
import Goal from "./models/goal";
import showGoal from "./showGoal";
import modal from "./modal";
import GoalsManager from "./models/goalsManager";

generateImages;
modal;

const addGoalBtn = document.getElementById("add-goal-btn");
const removeGoalBtn = document.getElementById("remove-goal-btn");
const sidebarLinks = Array.from(
  document.getElementById("sidebar-links").getElementsByTagName("li")
);
const goalsContainer = document.getElementById("goals-container");

// -------------------------
let goals = [];

const goal2 = new Goal("Goal 2", "today", true);
const goal3 = new Goal("Goal 3", "week", true);
const goal4 = new Goal("Goal 4", "year");
const goal5 = new Goal("Goal 5", "year");

goals.push(goal2);
goals.push(goal3);
goals.push(goal4);
goals.push(goal5);

let goalsManager = new GoalsManager(goals);
console.log(goalsManager);
goalsManager.render();

// goals.forEach((goal) => {
//   showGoal(goal);
// });

// sidebarLinks.forEach((link) => {
//   console.log(sidebarLinks);
//   link.addEventListener("click", () => {
//     goalsContainer.innerHTML = "";
//     sidebarLinks.forEach(link=>link.classList.remove('bg-gray-200'))
//     link.classList.add('bg-gray-200')

//     let text = link
//       .getElementsByTagName("h3")[0]
//       .innerHTML.split(" ")[0]
//       .toLowerCase();
//     let filteredGoals =
//       text === "all" ? goals : goals.filter((goal) => goal.category === text);
//     filteredGoals.forEach((goal) => {
//       showGoal(goal);
//     });
//   });
// });

// --------------------------------

const goalForm = {
  title: document.getElementById("goal-title"),
  category: document.getElementById("goal-category"),
};

addGoalBtn.addEventListener("click", () => {
  if (goalForm.title.value === "" || goalForm.category.value === "all") {
    document
      .getElementsByClassName("dangerAlert")[0]
      .classList.remove("hidden");
  } else {
    const goal = new Goal(goalForm.title.value, goalForm.category.value);
    goals.push(goal);
    Goal.goalsAmount[goal.category].total++;
    Goal.goalsAmount["all"].total++;
    showGoal(goal);
    document.getElementsByClassName("dangerAlert")[0].classList.add("hidden");
    document.getElementById("modal").classList.add("hidden");
  }
});


