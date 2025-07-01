function addtask() {
  const taskInput = document.getElementById("task");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const list = document.getElementById("list");

  // Create a new list item
  const listItem = document.createElement("li");
  listItem.textContent = taskText;

  // Toggle completed task on click
  listItem.addEventListener("click", () => {
    listItem.style.textDecoration =
      listItem.style.textDecoration === "line-through"
        ? "none"
        : "line-through";
  });

  // Remove task on double-click
  listItem.addEventListener("dblclick", () => {
    list.removeChild(listItem);
  });

  // Add to list and clear input
  list.appendChild(listItem);
  taskInput.value = "";
}

