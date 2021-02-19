import Goal from "./models/goal";

export default (goal)=>{
    let text = goal.category
    goal.create();
    document.getElementById(text).innerHTML = `${Goal.goalsAmount[text].total}/${Goal.goalsAmount[text].done}`;
}