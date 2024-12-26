const submit=document.getElementById('addtask');
const deletetask=document.getElementById('delete');
const list=document.getElementById('tasklist');
let taskList=[];

submit.addEventListener('click',()=>{
    const input=document.getElementById('taskinput');
    taskList.unshift({task:input.value});
    TaskviewList();
    input.value='';
});

deletetask.addEventListener('click',()=>{
    taskList=[];
    TaskviewList();

});
window.deleteone=(index)=>{
    taskList.splice(index,1);
    TaskviewList();
};
function TaskviewList(){
    list.innerHTML='';
    taskList.forEach((task,index)=> {
        const listitem=document.createElement('li');
        listitem.innerHTML=`${task.task} <button id='deleteone' onClick='deleteone(${index})'>Delete</button>`;
        list.appendChild(listitem);
    });
}

