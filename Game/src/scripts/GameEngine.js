class GameEngine{
    #canvas = null
    #ctx = null
    constructor(config){
        this.#canvas = config.canvas,
        this.#ctx = config.ctx

        this.#canvas.width = (64 * 16)/1
        this.#canvas.height = (64 * 9)/1
    }

    
    UPDATE(EventUpdate){
        
    }
    DRAW(EventDraw){

        
        this.#ctx.fillStyle = 'white'
        this.#ctx.fillRect(0,0,this.#canvas.width,this.#canvas.height)
    }
}