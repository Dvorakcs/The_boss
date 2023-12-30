class GameEngine{
    #canvas = null
    #ctx = null
    #scene = null
    constructor(config){
        this.#canvas = config.canvas,
        this.#ctx = config.ctx
        this.#canvas.width = (64 * 16)/1
        this.#canvas.height = (64 * 9)/1
        this.#scene = new scene({
                map : new EMap({
                    imageSrc:'/Game/src/Image/Level/backgroundLevel1.png',
                    collisionBlocks:collisionBlocks
                }),
                player: new Player({
                    position:{  x:200,y:200},
                    width:25,
                    height:25,
                    collisionBlock:collisionBlocks
                })
        })
    }

    
    UPDATE(EventUpdate){
        this.#scene.UPDATE()
    }
    DRAW(EventDraw){
      
        this.#ctx.clearRect(0,0,this.#canvas.width,this.#canvas.height) 
        this.#ctx.fillStyle = 'white'
        this.#ctx.fillRect(0,0,this.#canvas.width,this.#canvas.height)
        this.#scene.DRAW(this.#ctx)
    }
}