/* eslint-disable no-unused-expressions */
/* eslint-disable no-loop-func */

import GoalController from './goal.controller';

const sidebarLinks = Array.from(
  document.getElementById('sidebar-links').getElementsByTagName('li'),
);

let dragged;

class GoalsManagerController {
  constructor(goalsManager, container) {
    this.goalsManager = goalsManager;
    this.container = container;
    this.info = {
      container: {
        all: document.getElementById('goals-all'),
        today: document.getElementById('goals-today'),
        week: document.getElementById('goals-week'),
        year: document.getElementById('goals-year'),
        warningModal: document.getElementById('warning-modal'),
      },
    };

    const droppable = document.getElementsByClassName('droppable');
    Array.from(droppable).forEach((dropField) => {
      /* events fired on the drop targets */
      dropField.addEventListener(
        'dragover',
        (event) => {
          event.preventDefault();
        },
        false,
      );

      dropField.addEventListener(
        'dragenter',
        (event) => {
          // highlight potential drop target when the draggable element enters it
          if (event.target.classList.contains('dropzone')) {
            event.target.classList.add('bg-gray-200');
          }
        },
        false,
      );

      dropField.addEventListener(
        'dragleave',
        (event) => {
          // reset background of potential drop target when the draggable element leaves it
          if (event.target.classList.contains('dropzone')) {
            event.target.classList.remove('bg-gray-200');
          }
        },
        false,
      );

      dropField.addEventListener(
        'drop',
        (event) => {
          // prevent default action (open as link for some elements)
          event.preventDefault();

          Array.from(droppable).forEach((dropField) => {
            dropField.classList.remove('bg-white');
            dropField.classList.remove('dottedBorder');
          });
          // move dragged elem to the selected drop target
          if (event.target.classList.contains('dropzone')) {
            event.target.classList.remove('bg-gray-200');
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
          }
        },
        false,
      );
    });

    const addStepBtn = document.getElementById('add-step-btn');
    const stepContainers = {
      undone: document.getElementById('steps-undone'),
      doing: document.getElementById('steps-doing'),
      done: document.getElementById('steps-done'),
    };

    addStepBtn.addEventListener('click', () => {
      if (document.getElementById('step-item-new')) {
        return;
      }
      const node = document.createElement('div');
      node.className = 'bg-white hover-trigger p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter flex justify-between';
      node.id = 'step-item-new';
      const html = `
        <input type="text" placeholder="step text" id="step-text-input" class='w-4/5'>
        <div class='hover-target justify-between'>
          <img class='edit-btn mr-2 transition duration-500 ease-in-out hover:bg-gray-100 transform  hover:scale-150  hidden'
            src="https://img.icons8.com/dotty/16/000000/edit.png" />
          <img class='add-btn mr-2 transition duration-500 ease-in-out hover:bg-gray-100 transform  hover:scale-150'
            src="https://img.icons8.com/dotty/16/000000/add.png" />
          <img class='cancel-btn transition duration-500 ease-in-out hover:bg-gray-100 transform  hover:scale-150'
            src="https://img.icons8.com/dotty/16/000000/trash.png" />
          </div>
        </div>`;
      node.innerHTML = html;
      stepContainers.undone.appendChild(node);
      const addBtn = node.querySelector('.add-btn');
      const cancelBtn = node.querySelector('.cancel-btn');
      const editBtn = node.querySelector('.edit-btn');
      addBtn.addEventListener('click', () => {
        addBtn.classList.add('hidden');
        editBtn.classList.remove('hidden');
        node.setAttribute('draggable', true);
        node.classList.add('draggable');
        const stepIndex = this.goalsManager.goals[this.goalsManager.selectedGoalIndex].steps.length;
        node.id = `step-item-${stepIndex}`;
        node.dataset.index = stepIndex;

        const step = {
          text: document.getElementById('step-text-input').value,
          status: 'undone',
        };
        this.goalsManager.goals[this.selectedGoalIndex].steps.push(step);
        localStorage.setItem('goals', JSON.stringify(this.goalsManager.goals));

        node.addEventListener(
          'dragstart',
          (event) => {
            Array.from(droppable).forEach((dropField) => {
              dropField.classList.add('dottedBorder');
            });
            // store a ref. on the dragged elem
            dragged = event.target;
            // make it half transparent
            event.target.style.opacity = 0.5;
          },
          false,
        );

        node.addEventListener(
          'dragend',
          (event) => {
            Array.from(droppable).forEach((dropField) => {
              dropField.classList.remove('bg-white');
              dropField.classList.remove('dottedBorder');
            });
            // reset the transparency
            event.target.style.opacity = '';
            const { status } = dragged.parentElement.dataset;
            this.goalsManager.goals[this.selectedGoalIndex].steps[
              dragged.dataset.index
            ].status = status;
            localStorage.setItem('goals', JSON.stringify(this.goalsManager.goals));
          },
          false,
        );
      });
      cancelBtn.addEventListener('click', () => {
        node.remove();
      });
    });
  }

  addGoal(title, category) {
    this.goalsManager.addGoal(title, category);
    localStorage.setItem('goals', JSON.stringify(this.goalsManager.goals));
    this.renderGoals();
    this.updateInfo();
    sidebarLinks.forEach((link) => link.classList.remove('bg-gray-200'));
    this.info.container.all.parentNode.classList.add('bg-gray-200');
  }

  removeGoal() {
    const { index } = this.selected;
    this.goalsManager.goals.splice(index, 1);
    localStorage.setItem('goals', JSON.stringify(this.goalsManager.goals));
    this.renderGoals();
    this.goalsManager.info.goals.total.all -= 1;
    this.goalsManager.info.goals.total[this.selected.goal.category] -= 1;
    if (this.selected.goal.isDone) this.goalsManager.info.goals.done.all -= 1;
    if (this.selected.goal.isDone) {
      this.goalsManager.info.goals.done[this.selected.goal.category] -= 1;
    }
    delete this.selected;
    this.updateInfo();
    sidebarLinks.forEach((link) => link.classList.remove('bg-gray-200'));
    this.info.container.all.parentNode.classList.add('bg-gray-200');
  }

  setStepStatus(goalIndex, stepIndex, status) {
    this.goalsManager.goals[goalIndex].steps[stepIndex].status = status;
    localStorage.setItem('goals', JSON.stringify(this.goalsManager.goals));
  }

  renderGoals() {
    // this.container.innerHTML = '';
    for (let index = 0; index < this.goalsManager.goals.length; index += 1) {
      const goal = this.goalsManager.goals[index];
      this.renderGoal(goal, index);
    }
  }

  showByCategory(category) {
    for (let index = 0; index < this.goalsManager.goals.length; index += 1) {
      const goal = this.goalsManager.goals[index];
      const id = `goal-manager-item-${index}`;
      if (category !== 'all' && goal.category !== category) {
        document.getElementById(id).classList.add('hidden');
      } else {
        document.getElementById(id).classList.remove('hidden');
      }
    }
  }

  renderGoal(goal, index) {
    GoalController.render(goal, this.container).then((node) => {
      node.id = `goal-manager-item-${index}`;
      const removeGoalBtn = node.querySelector('.remove-goal-btn');
      const isDoneInput = node.querySelector('.goal-is-done-checkbox');
      const selectGoal = node.querySelector('.select-goal');
      const selectGoalLink = node.querySelector('.select-goal-link');

      removeGoalBtn.dataset.index = index;
      isDoneInput.addEventListener('change', (e) => {
        const isDone = e.target.checked;
        this.goalsManager.goals[index].isDone = isDone;
        isDone
          ? (this.goalsManager.info.goals.done.all += 1)
          : (this.goalsManager.info.goals.done.all -= 1);
        isDone
          ? (this.goalsManager.info.goals.done[goal.category] += 1)
          : (this.goalsManager.info.goals.done[goal.category] -= 1);
        this.updateInfo();
      });

      removeGoalBtn.dataset.index = index;
      removeGoalBtn.addEventListener('click', () => {
        this.selected = {
          goal: this.goalsManager.goals[index],
          index,
        };
        this.info.container.warningModal.classList.remove('hidden');
      });

      selectGoal.addEventListener('click', () => {
        this.selectGoal(goal, index);
      });
      selectGoalLink.addEventListener('click', () => {
        this.selectGoal(goal, index);
      });
    });
  }

  selectGoal(goal, index) {
    this.selectedGoalIndex = index;
    this.renderSteps(goal);
  }

  renderSteps(goal) {
    const containers = {
      undone: document.getElementById('steps-undone'),
      doing: document.getElementById('steps-doing'),
      done: document.getElementById('steps-done'),
    };

    containers.undone.innerHTML = '';
    containers.doing.innerHTML = '';
    containers.done.innerHTML = '';

    for (let index = 0; index < goal.steps.length; index += 1) {
      const step = goal.steps[index];
      const container = containers[step.status];
      const node = document.createElement('div');
      node.setAttribute('draggable', true);
      node.className = 'draggable bg-white hover-trigger p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter flex justify-between';
      node.id = `step-item-${index}`;
      node.dataset.index = index;
      const html = `
          <p>${step.text}</p>
          <div class='hover-target justify-between'>
            <img class='mr-2 transition duration-500 ease-in-out hover:bg-gray-100 transform  hover:scale-150'
              src="https://img.icons8.com/dotty/16/000000/edit.png" />
            <img class='transition duration-500 ease-in-out hover:bg-gray-100 transform  hover:scale-150'
              src="https://img.icons8.com/dotty/16/000000/trash.png" />
          </div>
      `;
      node.innerHTML = html;
      container.appendChild(node);
      const droppable = document.getElementsByClassName('droppable');

      node.addEventListener(
        'dragstart',
        (event) => {
          Array.from(droppable).forEach((dropField) => {
            dropField.classList.add('dottedBorder');
          });
          dragged = event.target;
          event.target.style.opacity = 0.5;
        },
        false,
      );

      node.addEventListener(
        'dragend',
        (event) => {
          Array.from(droppable).forEach((dropField) => {
            dropField.classList.remove('bg-white');
            dropField.classList.remove('dottedBorder');
          });
          // reset the transparency
          event.target.style.opacity = '';
          const { status } = dragged.parentElement.dataset;
          this.goalsManager.goals[this.selectedGoalIndex].steps[
            dragged.dataset.index
          ].status = status;
          localStorage.setItem('goals', JSON.stringify(this.goalsManager.goals));
        },
        false,
      );
    }
  }

  updateInfo() {
    if (this.info.container.all) this.info.container.all.innerHTML = `${this.goalsManager.info.goals.done.all} of ${this.goalsManager.info.goals.total.all}`;
    if (this.info.container.today) this.info.container.today.innerHTML = `${this.goalsManager.info.goals.done.today} of ${this.goalsManager.info.goals.total.today}`;
    if (this.info.container.week) this.info.container.week.innerHTML = `${this.goalsManager.info.goals.done.week} of ${this.goalsManager.info.goals.total.week}`;
    if (this.info.container.year) this.info.container.year.innerHTML = `${this.goalsManager.info.goals.done.year} of ${this.goalsManager.info.goals.total.year}`;
  }

  render() {
    this.renderGoals();
    this.updateInfo();
  }
}

export default GoalsManagerController;
