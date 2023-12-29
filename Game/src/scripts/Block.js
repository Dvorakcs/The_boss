class Block{
    #Position = null
    #Width = 0
    #Height = 0
    constructor(config){
        this.#Position = config.position ?? {x:0,y:0}
        this.#Width = config.width ?? 64
        this.#Height = config.height ?? 64
    }

    UPDATE(EventUpdate){

    }
    DRAW(EventDraw){
        EventDraw.fillStyle = 'rgba(255,0,0,0.5)'
        EventDraw.fillRect(this.#Position.x,this.#Position.y,this.#Width,this.#Height)
    }
}