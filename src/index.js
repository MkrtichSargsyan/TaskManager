import "../node_modules/normalize.css";
import "./css/style.css";
import "./css/customStyles.css";
import generateImages from "./generateImages";
generateImages
import { generateProjects, addProjectsToNode } from "./controllers/projectsController";

const projectsElm = document.getElementById("projects-container");
const addGoalBtn = document.getElementById("add-goal-btn");
const closeModal = document.getElementsByClassName("close-modal")
const modal = document.getElementById("modal");


let projects = generateProjects();
addProjectsToNode(projects, projectsElm);

addGoalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
})

for (let index = 0; index < closeModal.length; index++) {
  const element = closeModal[index];
  element.addEventListener("click", () =>{
    modal.classList.add("hidden");
  })
  
}
