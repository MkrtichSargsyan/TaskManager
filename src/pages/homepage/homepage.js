import Goal from '../../models/goal';
import '../../modal';
import GoalsManager from '../../models/goalsManager';
import GoalsManagerController from '../../controllers/goalsManager.controller';

export default () => {
  const addGoalBtn = document.getElementById('add-goal-btn');
  const removeGoalBtn = document.getElementById('remove-goal-btn');
  const sidebarLinks = Array.from(
    document.getElementById('sidebar-links').getElementsByTagName('li'),
  );
  const goalsContainer = document.getElementById('goals-container');
  const warningModal = document.getElementById('warning-modal');

  // -------------------------

  /* Testing data */
  const goalsData = JSON.parse(localStorage.getItem('goals'));
  const goals = [];
  if (!goalsData) {
    const goal1 = new Goal('Drink vodka with Mike', 'today', false, [
      {
        text: 'Finish goal manager project',
        status: 'done',
      },
      {
        text: 'Get TSE apporval',
        status: 'done',
      },
      {
        text: 'Buy ticket to Armenia',
        status: 'undone',
      },
      {
        text: 'Drink 65% alcohol volume vodka with Mike and survive',
        status: 'doing',
      },
      {
        text: 'Enjoy',
        status: 'doing',
      },
    ]);
    const goal2 = new Goal('Create a goal manager', 'today', true, [
      {
        text: 'Init webpack and install dependencies',
        status: 'done',
      },
      {
        text: 'Create webpage layout',
        status: 'done',
      },
      {
        text: 'Create goalManager class',
        status: 'done',
      },
      {
        text: 'Sync goalManager with layout events',
        status: 'done',
      },
      {
        text: 'Test goal manager app',
        status: 'doing',
      },
      {
        text: 'Clean goalManager class',
        status: 'undone',
      },
    ]);
    const goal3 = new Goal('Sell old stuffs', 'week', true, [
      {
        text: 'Xbox 360',
        status: 'doing',
      },
      {
        text: 'Old books',
        status: 'done',
      },
      {
        text: 'Goal Manager App',
        status: 'undone',
      },
    ]);
    const goal4 = new Goal('Get a good job', 'year');
    const goal5 = new Goal('Build a web development company', 'year');

    goals.push(goal1);
    goals.push(goal2);
    goals.push(goal3);
    goals.push(goal4);
    goals.push(goal5);
    localStorage.setItem('goals', JSON.stringify(goals));
  } else {
    goalsData.forEach((goal) => {
      goals.push(new Goal(goal.title, goal.category, goal.isDone, goal.steps));
    });
  }

  const goalsManager = new GoalsManager(goals);
  const goalsManagerController = new GoalsManagerController(goalsManager, goalsContainer);
  goalsManagerController.render();

  // goals.forEach((goal) => {
  //   showGoal(goal);
  // });

  sidebarLinks.forEach((link) => {
    link.addEventListener('click', () => {
      // goalsContainer.innerHTML = "";
      sidebarLinks.forEach((link) => link.classList.remove('bg-gray-200'));
      link.classList.add('bg-gray-200');

      const category = link
        .getElementsByTagName('h3')[0]
        .innerHTML.split(' ')[0]
        .toLowerCase();

      goalsManagerController.showByCategory(category);
      // let filteredGoals =
      //   text === "all" ? goals : goals.filter((goal) => goal.category === text);
      // filteredGoals.forEach((goal) => {
      //   showGoal(goal);
      // });
    });
  });

  // --------------------------------

  const goalForm = {
    title: document.getElementById('goal-title'),
    category: document.getElementById('goal-category'),
  };

  addGoalBtn.addEventListener('click', () => {
    if (goalForm.title.value === '' || goalForm.category.value === 'all') {
      document
        .getElementsByClassName('dangerAlert')[0]
        .classList.remove('hidden');
    } else {
      goalsManagerController.addGoal(goalForm.title.value, goalForm.category.value);
      document.getElementsByClassName('dangerAlert')[0].classList.add('hidden');
      document.getElementById('modal').classList.add('hidden');
    }
  });

  removeGoalBtn.addEventListener('click', () => {
    goalsManagerController.removeGoal();
    warningModal.classList.add('hidden');
  });
};
