// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
};

refs.openModalBtn.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.backdrop.addEventListener("click", onBackDropClick);

function onOpenModal(event) {
  document.body.classList.add("show-modal");
  window.addEventListener("keydown", onEscKeyDown);
}

function onCloseModal(event) {
  window.removeEventListener("keydown", onEscKeyDown);
  document.body.classList.remove("show-modal");
}

function onBackDropClick(event) {
  if (event.currentTarget === event.target) {
    console.log("click on backdrop");
    onCloseModal();
  }
}

function onEscKeyDown(event) {
  const ESC_KEY_CODE = "Escape";
  if (event.code === ESC_KEY_CODE) {
    onCloseModal();
  }
}
