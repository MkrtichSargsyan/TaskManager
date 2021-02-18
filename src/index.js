import "../node_modules/normalize.css";
import "./css/style.css";
import "./css/customStyles.css";
import generateImages from "./generateImages";
import Goal from "./models/goal";
generateImages

const openModal = document.getElementById("open-modal-btn");
const closeModal = document.getElementsByClassName("close-modal");
const addGoalBtn = document.getElementById("add-goal-btn");

const goalsAmount = {
  all:{
    total:0,
    done:0
  },
  year : {
    total:0,
    done:0
  },
  week : {
    total:0,
    done:0
  },
  today : {
    total:0,
    done:0
  },
}

/* Goals Form */
const goalForm = {
  title: document.getElementById("goal-title"),
  category: document.getElementById("goal-category")
}

const modal = document.getElementById("modal");


let goals = Goal.generateGoals();

goals.forEach(goal => {
  goal.addGoal();
  goalsAmount[goal.category].total++
});

all.innerHTML = `${goalsAmount.all.total}/${goalsAmount.all.done}`
year.innerHTML = `${goalsAmount.year.total}/${goalsAmount.year.done}`
week.innerHTML = `${goalsAmount.week.total}/${goalsAmount.week.done}`
today.innerHTML = `${goalsAmount.today.total}/${goalsAmount.today.done}`


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
  goal.addGoal();
  modal.classList.add("hidden");
})
