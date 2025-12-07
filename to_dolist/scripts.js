let addChore = document.querySelector(".adic")
let sectionTarefas = document.querySelector(".tarefas-section")
let all = document.querySelector(".todas")
let defalt = document.querySelector(".default")
let progress = document.querySelector(".progress")
let concluidas = document.querySelector(".concluidas")


function adicionar() {
    sectionTarefas.innerHTML += ` 
            <div class="tarefa">
                <p>
                ${addChore.value}
                </p>
                <button class="default status" onclick="state(this)">Pendente</button>
                <button class="lixeira" onclick="eliminar(this)"><img src="icons8-lixeira-30.png" alt="lixeira"></button>
            </div>`
}

function eliminar(btn) {
    btn.parentElement.remove()
}

function state(btn) {
    if(btn.classList.contains("default")){
        btn.classList.remove("default")
        btn.classList.add("progress")
        btn.innerHTML = "Em progresso"
        return
    }

    if(btn.classList.contains("progress")){
        btn.classList.remove("progress")
        btn.classList.add("concluidas")
        btn.innerHTML = "Concluída"
        return
    }

    if(btn.classList.contains("concluidas")){
        btn.classList.remove("concluidas")
        btn.classList.add("default")
        btn.innerHTML = "Pendente"
        return
    }
}

function filtrar(tipo){
    const tarefas = document.querySelectorAll(".tarefa")

    tarefas.forEach(tarefa => {
        const statusBtn = tarefa.querySelector(".status")

        if(tipo === "todas"){
            tarefa.style.display = "flex"
            return
        }

        if(statusBtn.classList.contains(tipo)){
            tarefa.style.display = "flex"
        } else {
            tarefa.style.display = "none"
        }
    })
}