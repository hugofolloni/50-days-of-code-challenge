var button = document.getElementById('button');
var input = document.getElementById('input');

var pplname = document.getElementById('name');

pplname.addEventListener('click', function(event){
    var newName = prompt('Qual o seu nome?')
    pplname.textContent = 'Lista de tarefas de ' + newName;
})

button.addEventListener('click', verifyContent);

input.addEventListener('keyup', function(event){
    if(event.key === "Enter"){
        return verifyContent();
    }
})

function verifyContent(){
    if(input.value == ''){
        button.disabled = true;
    } else{
        button.disabled = false;
        return addTask();
    }
}

input.focus()
 
function addTask(){
    var task = document.createElement('span');
    task.textContent = input.value;
    var br = document.createElement('br')
    input.value = '';
    task.style.cssText = 'width: 30vw; height: 30px; background-color: #08a59d; color: #eaeaea; text-align: center; margin-top: -4.3vh; border-radius: 10px; font-weight: 500; font-size: 18px; padding-top: 4px; cursor: pointer;'
    var check = document.createElement('i')
    check.className = 'fas fa-check'
    check.style.cssText = 'cursor: pointer; border: 1px solid #08a59d; margin-left: -40vw; padding: 4px; border-radius: 5px;'
    document.body.appendChild(check)
    document.body.appendChild(task);
    task.addEventListener('click', () => {
        var newTask = window.prompt("Editar tarefa:");
        task.textContent = newTask
    })
    var closebutton = document.createElement('i');
    closebutton.className ='fas fa-times'
    closebutton.style.cssText =  'width: 25px; cursor: pointer; color: #C70039; border: 1px solid #C70039; margin-left: 40vw; padding: 4px; padding-left: 6.2px; border-radius: 5px; margin-top: -3.7vh;'
    document.body.appendChild(closebutton);
    document.body.appendChild(br);
    closebutton.addEventListener('click', function(event){
        document.body.removeChild(check);
        document.body.removeChild(task);
        document.body.removeChild(closebutton);
        document.body.removeChild(br);
    });
    

    check.addEventListener('click', function(event){
        task.style.cssText = 'width: 30vw; height: 30px; background-color:#5B8581; color: #eaeaea; text-align: center; margin-top: -4.3vh; border-radius: 10px; font-weight: 500; font-size: 18px; padding-top: 4px; text-decoration: line-through;';
        check.style.cssText =  'cursor: pointer; color: #eaeaea; border: 1px solid #08a59d; margin-left: -40vw; padding: 4px; border-radius: 5px; background-color: #08a59d;'
    });
        closebutton.addEventListener('mouseover', function(event){
        closebutton.style.cssText =  'width: 25px; cursor: pointer; color: #eaeaea; border: 1px solid #C70039; margin-left: 40vw; padding: 4px; padding-left: 6.2px; border-radius: 5px; margin-top: -3.7vh; background-color: #C70039;'
    });
    closebutton.addEventListener('mouseout', function(event){
        closebutton.style.cssText =  'width: 25px; cursor: pointer; color: #C70039; border: 1px solid #C70039; margin-left: 40vw; padding: 4px; padding-left: 6.2px; border-radius: 5px; margin-top: -3.7vh;'
    })

}

