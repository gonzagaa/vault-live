
const button = document.querySelector(".buttonForm");
const buttonTwo = document.querySelector(".buttonFormTwo");

const modal = document.getElementById("dialogForm");

button.onclick = function() {
    modal.showModal();
}

buttonTwo.onclick = function() {
    modal.showModal();
}