const taskInput=document.getElementById('task');
const addbtn=document.getElementById('add');
const taskList=document.getElementById('tasklist');

addbtn.addEventListener("click",()=>{
     const taskText= taskInput.value.trim();
     if(taskText!==""){
          createTask(taskText);
          taskInput.value="";
     }
     else{
        alert("please enter the task..")  

     }
     
    

});
function createTask(text){
     const taskItem=document.createElement('li');
     taskItem.innerHTML=`
        <span>${text}</span>
        <button class="delete">Delete</button>
                  
     `;
     taskList.appendChild(taskItem);


     const deletebtn=taskItem.querySelector(".delete");
     deletebtn.addEventListener("click",()=>{
          taskItem.remove();

     });
     taskItem.addEventListener("click",()=>{
          taskItem.classList.toggle("completed")
     });
}
