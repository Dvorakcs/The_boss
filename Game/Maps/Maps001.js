class Maps {
    tiles = null
    constructor(config){
            this.tiles = config.tiles
    }
    START(StartEvent){
        this.tiles.forEach((tile) => {
            tile.START(StartEvent)
        });
    }
    UPDATE(UpdateEvent){
        this.tiles.forEach((tile) => {
            tile.UPDATE(UpdateEvent)
        });
    }
    DRAW(DrawEvent){
        this.tiles.forEach((tile) => {
            tile.DRAW(DrawEvent)
        });
    }
    STOP(StopEvent){
        this.tiles.forEach((tile) => {
            tile.STOP(StopEvent)
        });
    }
}