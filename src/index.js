import "../node_modules/normalize.css";
import "./css/style.css";
import "./css/customStyles.css";
import generateImages from "./generateImages";

generateImages;


import router from "./router";
import GoalsManager from "./models/goalsManager";

router.renderPage(window.location.hash);

window.addEventListener(
  'hashchange',
  () => router.renderPage(window.location.hash),
  {},
);

