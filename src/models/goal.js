const goalsContainer = document.getElementById("goals-container");

class Goal {
  constructor(title, category) {
    this.title = title;
    this.category = category;
  }
  static goalsAmount = {
    all: {
      total: 0,
      done: 0,
    },
    year: {
      total: 0,
      done: 0,
    },
    week: {
      total: 0,
      done: 0,
    },
    today: {
      total: 0,
      done: 0,
    },
  };


  create() {
    let node = document.createElement("div");
    node.className = "mb-8 px-1 w-full md:w-1/2 lg:px-4 lg:w-1/3";
    let html = `
    <article class="bg-gray-200 overflow-hidden rounded-lg shadow-lg">
      <a href="#">
        <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
      </a>
      <header class="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 class="text-lg">
          <a class="no-underline hover:underline text-black" href="#">
            ${this.title}
          </a>
        </h1>
        <p class="text-grey-darker text-sm">
          ${this.category}
        </p>
      </header>
      <footer class="flex items-center justify-between leading-none p-2 md:p-4">
        <div>
          <input type="checkbox" id="done" name="done" value="Done">
          <label for="vehicle1">Done</label><br>
        </div>
        <div class='flex'>
          <img src="https://img.icons8.com/android/24/000000/edit.png" class='mr-2'/>
          <img src="https://img.icons8.com/ios-filled/24/000000/delete-forever.png"/>
        </div>
      </footer>
    </article>
  `;
    node.innerHTML = html;
    this.constructor.goalsAmount[this.category]++;
    goalsContainer.appendChild(node);
  }

  static generateGoals() {
    let goals = [];

    const goal1 = new Goal("Goal 1", "all");

    const goal2 = new Goal("Goal 2", "today");

    const goal3 = new Goal("Goal 3", "week");

    const goal4 = new Goal("Goal 4", "year");

    const goal5 = new Goal("Goal 5", "year");

    goals.push(goal1);
    goals.push(goal2);
    goals.push(goal3);
    goals.push(goal4);
    goals.push(goal5);

    return goals;
  }
}

export default Goal;
