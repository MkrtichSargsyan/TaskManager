export default () => {
  // const a = document.getElementsByClassName("draggable")[0];
  const droppable = document.getElementsByClassName("droppable");
  let dragged;
  const addStepBtn = document.getElementById("add-step-btn");
  const containers = {
    undone: document.getElementById("steps-undone"),
    doing: document.getElementById("steps-doing"),
    done: document.getElementById("steps-done")
  };

  addStepBtn.addEventListener("click", () => {
    if(document.getElementById("step-item-new")){
      console.log("you are already adding an step");
      return;
    }
    let node = document.createElement("div");
      node.setAttribute("draggable", true);
      node.className = "draggable bg-white hover-trigger p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter flex justify-between";
      node.id = "step-item-new";
    let html = `
      <input type="text" placeholder="step title">
      <div class='hover-target justify-between'>
        <img class='add-btn mr-2 transition duration-500 ease-in-out hover:bg-gray-100 transform  hover:scale-150'
          src="https://img.icons8.com/dotty/16/000000/add.png" />
        <img class='cancel-btn transition duration-500 ease-in-out hover:bg-gray-100 transform  hover:scale-150'
          src="https://img.icons8.com/dotty/16/000000/trash.png" />
        </div>
      </div>`;
    node.innerHTML = html;
    containers.undone.appendChild(node);
    const addBtn = node.querySelector('.add-btn');
    const cancelBtn = node.querySelector('.cancel-btn');
    addBtn.addEventListener("click", () => {
      console.log("Please add this to steps of goal");
    });
    cancelBtn.addEventListener("click", () => {
      node.remove();
    });


  });




  // /* events fired on the draggable target */
  // a.addEventListener("drag", function (event) {}, false);

  // a.addEventListener(
  //   "dragstart",
  //   function (event) {
  //     Array.from(droppable).forEach((dropField)=>{
  //       console.log(dropField);
  //       dropField.classList.add('dottedBorder')
  //     })
  //     // store a ref. on the dragged elem
  //     dragged = event.target;
  //     // make it half transparent
  //     event.target.style.opacity = 0.5;
  //   },
  //   false
  // );

  // a.addEventListener(
  //   "dragend",
  //   function (event) {

  //     Array.from(droppable).forEach((dropField)=>{
  //       dropField.classList.remove('bg-white')
  //       dropField.classList.remove('dottedBorder')
  //     })
  //     // reset the transparency
  //     event.target.style.opacity = "";
  //   },
  //   false
  // );

  // Array.from(droppable).forEach((dropField) => {
  //   /* events fired on the drop targets */
  //   dropField.addEventListener(
  //     "dragover",
  //     function (event) {
  //       event.preventDefault();
  //     },
  //     false
  //   );

  //   dropField.addEventListener(
  //     "dragenter",
  //     function (event) {
  //       // highlight potential drop target when the draggable element enters it
  //       if (event.target.classList.contains("dropzone")) {
  //         event.target.classList.add("bg-gray-200");
  //       }
  //     },
  //     false
  //   );

  //   dropField.addEventListener(
  //     "dragleave",
  //     function (event) {
  //       console.log("leave");
  //       // reset background of potential drop target when the draggable element leaves it
  //       if (event.target.classList.contains("dropzone")) {
  //         event.target.classList.remove("bg-gray-200");
  //       }
  //     },
  //     false
  //   );

  //   dropField.addEventListener(
  //     "drop",
  //     function (event) {
  //       // prevent default action (open as link for some elements)
  //       event.preventDefault();

  //       Array.from(droppable).forEach((dropField)=>{
  //         dropField.classList.remove('bg-white')
  //         dropField.classList.remove('dottedBorder')
  //       })
  //       // move dragged elem to the selected drop target
  //       if (event.target.classList.contains("dropzone")) {
  //         event.target.classList.remove("bg-gray-200");
  //         dragged.parentNode.removeChild(dragged);
  //         event.target.appendChild(dragged);
  //       }
  //     },
  //     false
  //   );
  // });
};
