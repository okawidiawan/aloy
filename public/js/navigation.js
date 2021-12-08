// export const btnShow = document
//   .querySelector(".btnShow")
//   .addEventListener("click", function () {
//     const btnShow = document.querySelector(".btnShow");
//     btnShow.classList.toggle("tutup");
//   });

const list = document.querySelectorAll(".list");
export function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));
