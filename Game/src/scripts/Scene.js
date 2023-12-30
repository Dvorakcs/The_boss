class scene{
    #Map = null
    #Player = null
    #keyPad = null
 
    constructor(config){
        this.#keyPad = new Keypad()
        this.#Map = config.map 
        this.#Player = config.player
    }

    UPDATE(EventUpdate){
        this.#Map.UPDATE(EventUpdate)
        this.#Player.UPDATE({
            keySet:this.#keyPad.KEY
        })
    }
    DRAW(EventDraw){
        this.#Map.DRAW(EventDraw)
        this.#Player.DRAW(EventDraw)
    }
}