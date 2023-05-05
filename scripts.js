const inputNameTask = document.querySelector("input#input-Name-Task");
const inputTimeTask = document.querySelector("input#input-Time-Task");
const taskBox = document.querySelector("div.tasks-box");

const popOutChange = document.querySelector('div#edit-popout');
const BtnSaveTask= document.querySelector('#BtnSaveTas');

function addTask() {
    if (inputNameTask.value == '')  {
        alert('Preecha o Nome da tarefa');
    } else {
        let task = {
            nome: inputNameTask.value,
            time: inputTimeTask.value,
            id: gerarID(),
        }
        newTask(task); 
    }
}

function gerarID() {
    return Math.floor(Math.random() * 3000)
}

function newTask(task) {
    let divTask = createDivTask(task);
    taskBox.appendChild(divTask);
    inputNameTask.value = '';
    inputTimeTask.value = '';
}

function createDivTask(task) {

    let divTask = document.createElement('div');
    divTask.classList.add('tasks');
    divTask.id = task.id;
    
        let spanName = document.createElement('span');
        spanName.classList.add('task-name');
        spanName.innerHTML = task.nome;

        let spanTime = document.createElement('span');
        spanTime.classList.add('task-prize');
        spanTime.innerHTML = task.time;

        let divBtnBox = document.createElement('div');
        divBtnBox.classList.add('btns-box');
        
            let btnCheck = document.createElement('button');
            btnCheck.classList.add('btn-acction');
            btnCheck.innerHTML = '<i class="fa fa-check"></i>';
            btnCheck.setAttribute('onclick', 'check('+task.id+')');

            //let btnEdit= document.createElement('button');
            //btnEdit.classList.add('btn-acction');
            //btnEdit.innerHTML = '<i class="fa fa-pencil"></i>';
            //btnEdit.setAttribute('onclick', 'editar('+task.id+')');

            let btnExcluir = document.createElement('button');
            btnExcluir.classList.add('btn-acction');
            btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
            btnExcluir.setAttribute('onclick', 'excluir('+task.id+')');

        divBtnBox.appendChild(btnCheck);
        //divBtnBox.appendChild(btnEdit);
        divBtnBox.appendChild(btnExcluir);
  
    divTask.appendChild(spanName);
    divTask.appendChild(spanTime);
    divTask.appendChild(divBtnBox);

    return divTask;
}

function excluir(IdTask) {
    let confirm = window.confirm("Tem certeza que deseja excluir a tarefa?");
    if (confirm) {
        let taksInQ = document.getElementById(''+IdTask+'')
        if (taksInQ) {
            taskBox.removeChild(taksInQ);
        }
    }
}

function check(IdTask) {
    let taksInQ = document.getElementById(''+IdTask+'')
    if (taksInQ) {
        taksInQ.classList.toggle('task-finished');
    }
}