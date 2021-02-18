import Goal from "./models/goal";

export default (()=>{
  
  let goals = Goal.generateGoals();
  
  goals.forEach((goal) => {
    goal.create();
  });
  
  all.innerHTML = `${Goal.goalsAmount.all.total}/${Goal.goalsAmount.all.done}`;
  year.innerHTML = `${Goal.goalsAmount.year.total}/${Goal.goalsAmount.year.done}`;
  week.innerHTML = `${Goal.goalsAmount.week.total}/${Goal.goalsAmount.week.done}`;
  today.innerHTML = `${Goal.goalsAmount.today.total}/${Goal.goalsAmount.today.done}`;
  
})()