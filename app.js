// Initial mock data for demo purposes
let tasks = [
  { id: 1, title: "Research on Cloud Computing", subject: "IT Elective" },
  { id: 2, title: "Prepare slide deck", subject: "Capstone Project" }
];

const taskList = document.getElementById("taskList");
const taskForm = document.getElementById("taskForm");
const titleInput = document.getElementById("title");
const subjectInput = document.getElementById("subject");

// Render tasks to the page
function displayTasks() {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const div = document.createElement("div");
    div.className = "task-card";
    div.innerHTML = `
      <p><strong>Title:</strong> ${task.title}</p>
      <p><strong>Subject:</strong> ${task.subject}</p>
      <div class="task-actions">
        <button class="edit" onclick="editTask(${task.id})">✏️ Edit</button>
        <button onclick="deleteTask(${task.id})">🗑️ Delete</button>
      </div>
    `;
    taskList.appendChild(div);
  });
}

// Add new task
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const newTask = {
    id: Date.now(),
    title: titleInput.value,
    subject: subjectInput.value
  };

  tasks.push(newTask);
  displayTasks();
  taskForm.reset();
});

// Delete task
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  displayTasks();
}

// Edit task
function editTask(id) {
  const task = tasks.find(t => t.id === id);
  const newTitle = prompt("Edit Task Title:", task.title);
  const newSubject = prompt("Edit Subject:", task.subject);

  if (newTitle && newSubject) {
    task.title = newTitle;
    task.subject = newSubject;
    displayTasks();
  }
}

// Initial render
displayTasks();
