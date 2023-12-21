class Tile {
    position = null
    width = 0
    height = 0
    constructor(config){
        this.position = config.position
        this.width = config.width
        this.height = config.height
    }

    START(startEvent){

    }
    UPDATE(UpdateEvent){
        this.position.y ++
    }
    DRAW(DrawEvent){
        DrawEvent.fillStyle = "black"
        DrawEvent.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
    STOP(StopEvent){

    }
}