import "../node_modules/normalize.css";
import "./css/style.css";
import "./css/customStyles.css";
import generateImages from "./generateImages";
import Goal from "./models/goal";
generateImages;

const openModal = document.getElementById("open-modal-btn");
const closeModal = document.getElementsByClassName("close-modal");
const addGoalBtn = document.getElementById("add-goal-btn");

/* Goals Form */
const goalForm = {
  title: document.getElementById("goal-title"),
  category: document.getElementById("goal-category"),
};

const modal = document.getElementById("modal");

let goals = Goal.generateGoals();

goals.forEach((goal) => {
  goal.create();
});

all.innerHTML = `${Goal.goalsAmount.all.total}/${Goal.goalsAmount.all.done}`;
year.innerHTML = `${Goal.goalsAmount.year.total}/${Goal.goalsAmount.year.done}`;
week.innerHTML = `${Goal.goalsAmount.week.total}/${Goal.goalsAmount.week.done}`;
today.innerHTML = `${Goal.goalsAmount.today.total}/${Goal.goalsAmount.today.done}`;

openModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

for (let index = 0; index < closeModal.length; index++) {
  const element = closeModal[index];
  element.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
}

addGoalBtn.addEventListener("click", () => {
  const goal = new Goal(goalForm.title.value, goalForm.category.value);
  goal.create();
  all.innerHTML = `${Goal.goalsAmount.all.total}/${Goal.goalsAmount.all.done}`;
  year.innerHTML = `${Goal.goalsAmount.year.total}/${Goal.goalsAmount.year.done}`;
  week.innerHTML = `${Goal.goalsAmount.week.total}/${Goal.goalsAmount.week.done}`;
  today.innerHTML = `${Goal.goalsAmount.today.total}/${Goal.goalsAmount.today.done}`;
  modal.classList.add("hidden");
});
