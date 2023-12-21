class Game{
    scene = null
    constructor(config){
        this.scene = config.scene
    }

    START(StartEvent){
        this.scene.START(StartEvent)
    }
    UPDATE(UpdateEvent){
        this.scene.UPDATE(UpdateEvent)
    }
    DRAW(DrawEvent){
        this.scene.DRAW(DrawEvent)
    }
    STOP(StopEvent){
        this.scene.STOP(StopEvent)
    }
}