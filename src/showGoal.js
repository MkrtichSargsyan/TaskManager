import Goal from "./models/goal";

export default (goal) => {
  let text = goal.category;
  goal.create();
  document.getElementById(
    text
  ).innerHTML = `${Goal.goalsAmount[text].total}/${Goal.goalsAmount[text].done}`;
  document.getElementById(
    "all"
  ).innerHTML = `${Goal.goalsAmount["all"].total}/${Goal.goalsAmount["all"].done}`;
};
