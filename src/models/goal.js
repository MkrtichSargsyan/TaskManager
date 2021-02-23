class Goal {
  constructor(title, category, isDone = false) {
    this.title = title;
    this.category = category;
    this.isDone = isDone;
  }

  render(container) {
    return new Promise((resolve) => {
      let node = document.createElement("div");
      node.className = "mb-8 px-1 w-full md:w-1/2 lg:px-4 lg:w-1/3";
      const isDone = this.isDone ? 'checked' : '';
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
          <p class="text-grey-darker text-sm ml-2">
            ${new Date().toJSON().slice(0, 10).replace(/-/g, "/")}
          </p>
        </header>
        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
          <div class='flex items-center'>
            <input type="checkbox" name="done" class='w-4 h-4 mr-2 cursor-pointer goal-is-done-checkbox' value="Done" ${isDone}>
            <label for="done" class='cursor-pointer'>Done</label><br>
          </div>
          <div class='flex'>
            <img src="https://img.icons8.com/android/24/000000/edit.png" class='mr-2 cursor-pointer transform hover:scale-110'/>
            <img src="https://img.icons8.com/ios-filled/24/000000/delete-forever.png" class='cursor-pointer transform hover:scale-110 remove-goal-btn'/>
          </div>
        </footer>
      </article>
    `;
      node.innerHTML = html;
      container.appendChild(node);
      resolve(node);
    })
  }
}

export default Goal;
