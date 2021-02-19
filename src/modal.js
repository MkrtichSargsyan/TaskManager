export default (() => {
  const openModal = document.getElementById("open-modal-btn");
  const closeModal = document.getElementsByClassName("close-modal");

  const modal = document.getElementById("modal");
  const warningModal = document.getElementById("warning-modal");


  openModal.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  for (let index = 0; index < closeModal.length; index++) {
    const element = closeModal[index];
    element.addEventListener("click", () => {
      modal.classList.add("hidden");
      warningModal.classList.add("hidden");
    });
  }

})();
