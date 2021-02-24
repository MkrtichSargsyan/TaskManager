export default () => {
  // const a = document.getElementsByClassName("draggable")[0];
  const droppable = document.getElementsByClassName("droppable");
  let dragged;


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
