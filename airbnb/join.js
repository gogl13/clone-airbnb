const modalfullElement = document.querySelector(".modalfull");
const closeiconElement = document.querySelector(".closeicon");
const closedmodalElement = document.querySelector(".closedmodal");
const peoplejoinElement = document.querySelector(".peoplejoin");
const no2Element = document.querySelector(".no2");
const modalcontentsElement = document.querySelector(".modalcontents");

peoplejoinElement.addEventListener("click", function (event) {
  modalfullElement.classList.remove("closedmodal");
});

closeiconElement.addEventListener("click", function (event) {
  closedmodalElement.classList.add("closedmodal");
});

modalfullElement.addEventListener("click", function (event) {
  closedmodalElement.classList.add("closedmodal");
});

modalcontentsElement.addEventListener("click", (event) => {
  event.stopPropagation();
});
