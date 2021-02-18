import "../node_modules/normalize.css";
import "./css/style.css";
import "./css/customStyles.css";
import generateImages from "./generateImages";
generateImages
import Goal from "./controllers/projectsController";

const goalsContainer = document.getElementById("goals-container");
const openModal = document.getElementById("open-modal-btn");
const closeModal = document.getElementsByClassName("close-modal");
const addGoalBtn = document.getElementById("add-goal-btn");

/* Goals Form */
const goalForm = {
  title: document.getElementById("goal-title"),
  category: document.getElementById("goal-category")
}

const modal = document.getElementById("modal");


let goals = Goal.generateGoals();

goals.forEach(project => {
  project.addTo(goalsContainer);
});


openModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
})

for (let index = 0; index < closeModal.length; index++) {
  const element = closeModal[index];
  element.addEventListener("click", () =>{
    modal.classList.add("hidden");
  })
  
}

addGoalBtn.addEventListener("click", () => {
  const goal = new Goal(
    goalForm.title.value, 
    goalForm.category.value
  );
  goal.addTo(goalsContainer);
  modal.classList.add("hidden");
})
