const tasks = document.querySelectorAll(".task");

tasks.forEach((task) => {

  task.onclick = function () {

    this.classList.toggle("completed");
  };
});