class Controller{
    IsKeys = {
        A:false,
        S:false,
        W:false,
        D:false
    }
    constructor(){

        this.PressKeyDown = window.addEventListener("keydown", (event) => this.SetKeys(event,true))
        this.PressKeyUp = window.addEventListener("keyup", (event) => this.SetKeys(event,false))
    }

    GetKeys(){
       return this.IsKeys
    }

    SetKeys(event,pressed){
      this.IsKeys[event.key.toUpperCase()] = pressed
    }
    


}