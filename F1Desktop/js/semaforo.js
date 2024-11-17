"use script";
class Semaforo{
    levels = [0.2,0.5,0.8]
    lights = 4
    unload_moment = null
    clic_moment = null

    constructor(){
        this.difficulty = this.levels[Math.floor(Math.random() * 3)]
        this.createStructure()
    }

    createStructure(){
        var main = document.querySelector("main")
        var encabezado = document.createElement("h2")
        encabezado.textContent = "Juego del semáforo"
        main.appendChild(encabezado)
        for(var i = 0; i < this.lights;i++){
            main.appendChild(document.createElement("div"))
        }
        var bt1 = document.createElement("button")
        bt1.textContent = "Arranque"
        bt1.onclick = this.initSequence.bind(this)
        main.appendChild(bt1)
        var bt2 = document.createElement("button")
        bt2.textContent = "Reacción"
        bt2.disabled = true
        bt2.onclick = this.stopReaction.bind(this)
        main.appendChild(bt2)
        var parrafo= document.createElement("p")
        main.appendChild(parrafo)
    }

    endSequence(){
        var btReaccion = document.querySelector("main button:nth-of-type(2)")
        btReaccion.disabled = false
        var main = document.querySelector("main")
        main.classList.add("unload")
    }

    initSequence(){
        var main = document.querySelector("main")
        main.classList.add("load")
        var boton = document.querySelector("main button:first-of-type")
        boton.disabled=true
        setTimeout(() =>{
            this.unload_moment = Date.now()
            this.endSequence()
            }, 2000 + this.difficulty*100);
    }

    stopReaction(){
        this.clic_moment = Date.now()
        this.reaction_time = this.clic_moment - this.unload_moment
        var main = document.querySelector("main")
        var parrafo= document.querySelector("main p")
        parrafo.textContent = "Tiempo de reacción: "+this.reaction_time+" ms"
        main.classList.remove("load")
        main.classList.remove("unload")
        var btReaccion = document.querySelector("main button:nth-of-type(2)")
        btReaccion.disabled=true 
        var btArranque = document.querySelector("main button:first-of-type")
        btArranque.disabled=false 
    }



    
}