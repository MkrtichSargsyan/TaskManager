import Goal from "../models/goalT";
import GoalsManager from "../models/goalsManagerT";

const goalsManager = new GoalsManager();


describe('GoalManager add method', () => {
  /*Create a goal */
  let goal1 = new Goal('a goal', 'week');
  let goal2 = new Goal('a goal', 'year');
  

  test('Create a new goal', () => {
    goalsManager.addGoal(goal1)
    expect(goalsManager.goals.length)
    .toBe(1);
  });

  test('Create another goal', () => {
    goalsManager.addGoal(goal2)
    expect(goalsManager.goals.length)
    .toBe(2);
  });

  test('Remove last goal', () => {
    goalsManager.removeGoal(goal1)
    expect(goalsManager.goals.length)
    .toBe(1);
  });

});