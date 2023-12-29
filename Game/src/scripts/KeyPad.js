class Keypad{
    #keys = {
        W:{
            pressed:false
        },
        D:{
            pressed:false
        },
        A:{
            pressed:false
        },
       
    }
    constructor(){
        window.addEventListener('keydown', (event) => this.setKey(event.key,true))
        window.addEventListener('keyup', (event) => this.setKey(event.key,false))
    }
    get KEY(){
        return this.#keys
    }
    setKey(key,press){
        this.#keys[key.toUpperCase()].pressed = press;
        
    }
   
}