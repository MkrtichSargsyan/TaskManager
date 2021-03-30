import GoalsManager from '../models/goalsManager';

const goalsManager = new GoalsManager();


describe('GoalManager add method', () => {
  /* Create a goal */

  test('Create a new goal', () => {
    goalsManager.addGoal('a week goal', 'week');
    expect(goalsManager.goals.length)
      .toBe(1);
  });

  test('Create another goal', () => {
    goalsManager.addGoal('a year goal', 'year');
    expect(goalsManager.goals.length)
      .toBe(2);
  });

  test('Remove last goal', () => {
    goalsManager.removeGoal(goalsManager.goals[1]);
    expect(goalsManager.goals.length)
      .toBe(1);
  });

  test('Get goals by category', () => {
    const goals = goalsManager.getByCategory('week');
    expect(goals.length)
      .toBe(1);
  });
});