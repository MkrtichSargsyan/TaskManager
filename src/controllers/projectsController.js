class Goal {
  constructor(title, category) {
    this.title = title;
    this.category = category;
  }

  addTo(parentNode){
    let node = document.createElement('div');
    node.className = "mb-8 px-1 w-full md:w-1/2 lg:px-4 lg:w-1/3";
    let html = `
    <article class="overflow-hidden rounded-lg shadow-lg">
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
        <a class="flex items-center no-underline hover:underline text-black" href="#">
          <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
        </a>
        <img src="https://img.icons8.com/android/24/000000/edit.png"/>
        <img src="https://img.icons8.com/ios-filled/24/000000/delete-forever.png"/>
      </footer>
    </article>
  `;
  node.innerHTML = html;
  parentNode.append(node);
  }

  static generateGoals(){
    let goals = [];

    const goal1 = new Goal(
      "Goal 1",
      "This week",
      );

    const goal2 = new Goal(
      "Goal 2",
      "Today goal",
      );

      const goal3 = new Goal(
        "Goal 3",
        "Week goal",
       );
    
      const goal4 = new Goal(
        "Goal 4",
        "Year Goal",
        );

    goals.push(goal1);
    goals.push(goal2);
    goals.push(goal3);
    goals.push(goal4);

    return goals;
  }
}

export default Goal;


