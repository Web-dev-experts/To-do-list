let userTask = document.querySelector("input");
let tasksContainer = document.querySelector("#tasks");
let addBtn = document.querySelector("#push");
const addTask = function () {
  //Create task container
  if (userTask.value == "") {
    alert("Please enter a name for the task");
  } else {
    let task = document.createElement("div");
    task.classList.add("task");

    //Create task name
    let taskName = document.createElement("span");
    taskName.classList.add("taskname");
    taskName.textContent = userTask.value;
    task.appendChild(taskName);

    //Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.insertAdjacentHTML(
      "beforeend",
      '<i class="far fa-trash-alt"></i>'
    );
    deleteBtn.addEventListener("click", function () {
      deleteBtn.closest(".task").remove();
    });
    task.appendChild(deleteBtn);

    //Put task in task container
    userTask.value = "";
    tasksContainer.appendChild(task);
  }
};
addBtn.addEventListener("click", addTask);
