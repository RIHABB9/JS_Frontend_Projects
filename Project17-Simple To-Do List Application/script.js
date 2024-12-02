const todoList = document.getElementById("todoList");
const newTodoInput = document.getElementById("newToDoInput");
const addTodoBtn = document.getElementById("addTodoBtn");

addTodoBtn.addEventListener("click",()=>{

    const newTodoText = newTodoInput.value;

    if(newTodoText!==""){
        const newTodoItem = document.createElement("li");
        newTodoItem.innerText = newTodoText;
        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.innerText = "X";

        deleteTodoBtn.classList.add("delete-todo-btn");
        deleteTodoBtn.addEventListener("click",function(){
            newTodoItem.remove();
        });

        newTodoItem.appendChild(deleteTodoBtn);
        todoList.appendChild(newTodoItem);
        newTodoInput.value = "";
    }
});