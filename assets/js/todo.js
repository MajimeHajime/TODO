const todoList = document.getElementById('todo-list');
const todoItems = todoList.children;
const buttonForAdd = document.getElementById('todo-new');
const inputText = document.getElementById('input-text');
const finishedTask = document.getElementsByClassName('finished');
const unfinishedTask = document.getElementsByClassName('unfinished');
const categoriesTaks = document.getElementById("cat");
// const selectBtn = document.getElementById("sel-btn");


// selectBtn.addEventListener("click",function(){
//     selectBtn.classList.toggle("active");
//     const checkList = document.createElement("button")
// })

buttonForAdd.addEventListener("click", function(){
    const newItem = document.createElement("p");
    newItem.classList.add("item");
    newItem.innerText = inputText.value;
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
        e.target.parentNode.parentElement.firstChild.classList.toggle("finished");
        e.target.parentNode.parentElement.firstChild.classList.toggle("item");
    }
    if(item.classList[0] == "delete-button"){
        e.stopPropagation();
        e.target.parentNode.parentElement.remove();
    }
}
