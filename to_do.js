let todoList=[];
console.log(todoList);
function addTodo()
{
    let todoEnter=document.querySelector('#todo-enter');
    let todoVal=todoEnter.value;
    let todoDate=document.querySelector('#todo-Date');
   let due=todoDate.value;
        // console.log(todoVal);
        todoList.push({item:todoVal,duedate:due});
        console.log(todoList);
        todoEnter.value='';
        todoDate.value='';

        displayTodo();

}
function displayTodo()
{
    let todo_container=document.querySelector('.todo-container');
    console.log(todo_container);

    let newHmtl='';
   for (let i =0 ; i<todoList.length; i++)
   {

    newHmtl+=
    `
      
        <span class="item-duedate" >${todoList[i].item}</span>
        <span class="item-duedate" >${todoList[i].duedate}</span>

        <button id ="del-button" onclick="todoList.splice(${i},1); 
        displayTodo();">
        Delete</button>
       
    `;
   }     
todo_container.innerHTML=newHmtl;



}
displayTodo();
