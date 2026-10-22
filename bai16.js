const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const remainingCountElement = document.getElementById('remainingCount');
addBtn.addEventListener('click', addNewTask);
todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addNewTask();
    }
});

function addNewTask() {
    const taskTextValue = todoInput.value.trim();

    if (taskTextValue === '') {
        alert('Vui lòng nhập nội dung công việc!');
        return;
    }
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
        <span class="custom-checkbox" onclick="toggleTask(this)"></span>
        <span class="task-text" onclick="toggleTask(this)">${taskTextValue}</span>
        <button class="btn-delete" onclick="deleteTask(this)">Xoá</button>
    `;

    todoList.appendChild(li);
    todoInput.value = '';
    todoInput.focus();

    updateRemainingCount();
}
function toggleTask(element) {
    const li = element.closest('.todo-item');
    li.classList.toggle('completed');

    updateRemainingCount();
}
function deleteTask(buttonElement) {
    const li = buttonElement.closest('.todo-item');
    li.remove(); 
    updateRemainingCount();
}
iệc chưa hoàn thành
function updateRemainingCount() {
    const totalItems = todoList.querySelectorAll('.todo-item').length;
    const completedItems = todoList.querySelectorAll('.todo-item.completed').length;
    const remaining = totalItems - completedItems;

    remainingCountElement.innerText = `Còn ${remaining} việc chưa hoàn thành`;
}
updateRemainingCount();