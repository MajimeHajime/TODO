const todoList = document.getElementById('todo-list');
const todoItems = todoList.children;
const buttonForAdd = document.getElementById('todo-new');
const inputText = document.getElementById('input-text');
const finishedTask = document.getElementsByClassName('finished');
const unfinishedTask = document.getElementsByClassName('unfinished');
const filterBtn = document.getElementById("cat");

document.addEventListener("DOMContentLoaded", getLocal);
document.addEventListener("DOMContentLoaded", getFinished);


filterBtn.addEventListener("click", e => {
    console.log(todoItems);
    for (item of todoItems){
        switch (e.target.value){
            case "a":
                item.style.display = 'flex';
                break;
            case "f":
                if(item.firstChild.classList.contains("finished")){
                    item.style.display = "flex";
                }else{
                    item.style.display = "none";
                }
                break;
            case "u":
                case "f":
                if(item.firstChild.classList.contains("finished")){
                    item.style.display = "none";
                }else{
                    item.style.display = "flex";
                }
                break;
        }
    }
})

buttonForAdd.addEventListener("click", e => {
    const newItem = document.createElement("p");
    newItem.classList.add("item");
    newItem.innerText = inputText.value;
    storeLocal(inputText.value);
    const selectBut = document.createElement("button");
    selectBut.classList.add("select-button");
    selectBut.classList.add("styled");
    selectBut.innerText = "✓";
    const deleteBut = document.createElement("button");
    deleteBut.classList.add("delete-button");
    deleteBut.classList.add("styled");
    deleteBut.innerText = "delete";
    const itemContainer= document.createElement("div");
    itemContainer.classList.add("secondItem");
    itemContainer.appendChild(selectBut);
    itemContainer.appendChild(deleteBut);
    const desuDesu = document.createElement("div");
    desuDesu.classList.add("forTheItem");
    desuDesu.appendChild(newItem);
    desuDesu.appendChild(itemContainer);
    itemContainer.addEventListener("click", itemToggle);
    todoList.appendChild(desuDesu);
    inputText.value = "";
});

function itemToggle(e){
    const item = e.target;
    console.log(item.classList[0]);
    if(item.classList[0] == "select-button"){
        e.stopPropagation();
        e.target.classList.toggle("active");
        e.target.parentNode.parentElement.firstChild.classList.toggle("finished");
        e.target.parentNode.parentElement.firstChild.classList.toggle("item");
        if(e.target.parentNode.parentElement.firstChild.classList.contains("finished")){
            console.log(e.target.parentNode.parentElement.firstChild);
            finishedLocal(e.target.parentNode.parentElement.firstChild.innerText);
            deleteLocal(e.target.parentNode.parentElement.firstChild.innerText);
        }else{
            unfinishLocal(e.target.parentNode.parentElement.firstChild.innerText);
            storeLocal(e.target.parentNode.parentElement.firstChild.innerText);
        }
    }
    if(item.classList[0] == "delete-button"){
        e.stopPropagation();
        deleteLocal(e.target.parentElement.parentElement.firstChild.innerText);
        e.target.parentNode.parentElement.remove();
    }
}

function storeLocal(todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos" ,JSON.stringify(todos));
}
function getLocal(){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    for(todo of todos){
        const newItem = document.createElement("p");
        newItem.classList.add("item");
        newItem.innerText = todo;
        const selectBut = document.createElement("button");
        selectBut.classList.add("select-button");
        selectBut.classList.add("styled");
        selectBut.innerText = "✓";
        const deleteBut = document.createElement("button");
        deleteBut.classList.add("delete-button");
        deleteBut.classList.add("styled");
        deleteBut.innerText = "delete";
        const itemContainer= document.createElement("div");
        itemContainer.classList.add("secondItem");
        itemContainer.appendChild(selectBut);
        itemContainer.appendChild(deleteBut);
        const desuDesu = document.createElement("div");
        desuDesu.classList.add("forTheItem");
        desuDesu.appendChild(newItem);
        desuDesu.appendChild(itemContainer);
        itemContainer.addEventListener("click", itemToggle);
        todoList.appendChild(desuDesu);
    }
}
function deleteLocal(todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    let f_todos;
    if(localStorage.getItem("f_todos") === null){
        f_todos = [];
    }else{
        f_todos = JSON.parse(localStorage.getItem("f_todos"));
    }
    if (todos.indexOf(todo) >= 0 ){
        todos.splice(todos.indexOf(todo), 1);
        localStorage.setItem("todos" ,JSON.stringify(todos));
    }else{
        f_todos.splice(f_todos.indexOf(todo), 1);
        localStorage.setItem("f_todos" ,JSON.stringify(f_todos));
    }
}

function unfinishLocal(todo){
    let f_todos;
    if(localStorage.getItem("f_todos") === null){
        f_todos = [];
    }else{
        f_todos = JSON.parse(localStorage.getItem("f_todos"));
    }
    f_todos.splice(f_todos.indexOf(todo), 1);
    localStorage.setItem("f_todos" ,JSON.stringify(f_todos));
}

function finishedLocal(todo){
    let f_todos;
    if(localStorage.getItem("f_todos") === null){
        f_todos = [];
    }else{
        f_todos = JSON.parse(localStorage.getItem("f_todos"));
    }
    f_todos.push(todo);
    localStorage.setItem("f_todos" ,JSON.stringify(f_todos));
}   

function getFinished(){
    let f_todos;
    if(localStorage.getItem("f_todos") === null){
        f_todos = [];
    }else{
        f_todos = JSON.parse(localStorage.getItem("f_todos"));
    }
    for(todo of f_todos){
        const newItem = document.createElement("p");
        newItem.classList.add("finished");
        newItem.innerText = todo;
        const selectBut = document.createElement("button");
        selectBut.classList.add("select-button");
        selectBut.classList.add("active");
        selectBut.classList.add("styled");
        selectBut.innerText = "✓";
        const deleteBut = document.createElement("button");
        deleteBut.classList.add("delete-button");
        deleteBut.classList.add("styled");
        deleteBut.innerText = "delete";
        const itemContainer= document.createElement("div");
        itemContainer.classList.add("secondItem");
        itemContainer.appendChild(selectBut);
        itemContainer.appendChild(deleteBut);
        const desuDesu = document.createElement("div");
        desuDesu.classList.add("forTheItem");
        desuDesu.appendChild(newItem);
        desuDesu.appendChild(itemContainer);
        itemContainer.addEventListener("click", itemToggle);
        todoList.appendChild(desuDesu);
    }
}
