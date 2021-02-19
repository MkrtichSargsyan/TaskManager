import "../node_modules/normalize.css";
import "./css/style.css";
import "./css/customStyles.css";
import generateImages from "./generateImages";
import Goal from "./models/goal";
import showGoal from "./showGoal";
import modal from "./modal";

generateImages;
modal;

const addGoalBtn = document.getElementById("add-goal-btn");
const sidebarLinks = Array.from(
  document.getElementById("sidebar-links").getElementsByTagName("li")
);
const goalsContainer = document.getElementById("goals-container");

// -------------------------
let goals = [];

const goal2 = new Goal("Goal 2", "today");
const goal3 = new Goal("Goal 3", "week");
const goal4 = new Goal("Goal 4", "year");
const goal5 = new Goal("Goal 5", "year");

goals.push(goal2);
goals.push(goal3);
goals.push(goal4);
goals.push(goal5);


goals.forEach((goal) => {
  showGoal(goal);
});

sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    goalsContainer.innerHTML = "";

    let text = link
      .getElementsByTagName("h3")[0]
      .innerHTML.split(" ")[0]
      .toLowerCase();
    let filteredGoals =
      text === "all" ? goals : goals.filter((goal) => goal.category === text);
    filteredGoals.forEach((goal) => {
      showGoal(goal);
    });
  });
});

// --------------------------------

const goalForm = {
  title: document.getElementById("goal-title"),
  category: document.getElementById("goal-category"),
};

addGoalBtn.addEventListener("click", () => {
  const goal = new Goal(goalForm.title.value, goalForm.category.value);
  goals.push(goal);
  Goal.goalsAmount[goal.category].total++;
  Goal.goalsAmount['all'].total++;
  showGoal(goal);
  document.getElementById("modal").classList.add("hidden");
});
