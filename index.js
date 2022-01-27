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
