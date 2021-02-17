class Project {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export const generateProjects = () => {
  let projects = [];

  const project1 = new Project(
    "project 1",
    "This is a description for this project",
    "12/13/1944",
    "normal");

  const project2 = new Project(
    "project 2",
    "This is a description for this project",
    "12/13/1944",
    "low");

    const project3 = new Project(
      "project 3",
      "This is a description for this project",
      "12/13/1944",
      "normal");
  
    const project4 = new Project(
      "project 4",
      "This is a description for this project",
      "12/13/1944",
      "low");

  projects.push(project1);
  projects.push(project2);
  projects.push(project3);
  projects.push(project4);

  return projects;
}


export const addProjectsToNode = (projects, parentNode) => {
  projects.forEach(project => {
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
            ${project.title}
          </a>
        </h1>
        <p class="text-grey-darker text-sm">
          ${project.dueDate}
        </p>
      </header>
      <footer class="flex items-center justify-between leading-none p-2 md:p-4">
        <a class="flex items-center no-underline hover:underline text-black" href="#">
          <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
          <p class="ml-2 text-sm">
          priority: ${project.priority}
          </p>
        </a>
        <img src="https://img.icons8.com/android/24/000000/edit.png"/>
        <img src="https://img.icons8.com/ios-filled/24/000000/delete-forever.png"/>
      </footer>
    </article>
  `;
  node.innerHTML = html;
  parentNode.append(node);
  });
}


