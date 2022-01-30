/*For Chips*/
function removeChip(event) {
  event.target.parentNode.style.display = "none";
}

function addChip(event) {
  if (event.keyCode === 13 && event.target.value) {
    const chipsContainer = document.querySelector(".chips-container");

    const newChip = document.createElement("div");
    newChip.classList.add("chip");
    newChip.innerText = event.target.value;
    const closeButton = document.createElement("button");
    closeButton.classList.add("material-icons");
    closeButton.classList.add("mdc-icon-button__icon");
    closeButton.classList.add("chip-close-icon");
    closeButton.innerText = "close";
    closeButton.addEventListener("click", removeChip);
    newChip.appendChild(closeButton);
    chipsContainer.appendChild(newChip);
  }
}

const chipCloseIcon = document.querySelectorAll(".chip-close-icon");
const inputChip = document.querySelector(".chip-input");

chipCloseIcon.forEach((closeIcon) => {
  closeIcon.addEventListener("click", removeChip);
});

inputChip.addEventListener("keyup", addChip);

/*For Snackbar*/
const btnBaseline = document.getElementById("btn-baseline");
const btnLeading = document.getElementById("btn-leading");
const btnStacked = document.getElementById("btn-stacked");
const snackBtnClose = document.querySelectorAll(".snack-close");

function hideAllSnack() {
  const allSnacks = document.querySelectorAll(".snack-container");
  allSnacks.forEach((snack) => {
    snack.style.display = "none";
  });
}

btnBaseline.addEventListener("click", () => {
  hideAllSnack();
  document.querySelector(".snack-baseline").style.display = "flex";
  return;
});
btnLeading.addEventListener("click", () => {
  hideAllSnack();
  document.querySelector(".snack-leading").style.display = "flex";
});
btnStacked.addEventListener("click", () => {
  hideAllSnack();
  document.querySelector(".snack-stacked").style.display = "flex";
});

snackBtnClose.forEach((closeBtn) =>
  closeBtn.addEventListener("click", hideAllSnack)
);

hideAllSnack();
