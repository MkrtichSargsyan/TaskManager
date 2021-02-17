import "../node_modules/normalize.css";
import "./css/style.css";
import "./css/customStyles.css";
import generateImages from "./generateImages";
generateImages
import { generateProjects, addProjectsToNode } from "./controllers/projectsController";

const projectsElm = document.getElementById("projects-container");

let projects = generateProjects();
addProjectsToNode(projects, projectsElm);
