class Scene{
    maps = null
    players = null
    controller = null;
    constructor(config){
        this.maps = config.maps
        this.players = config.players
        this.controller = config.controller
    }

    START(StartEvent){
        this.maps.START(StartEvent)
        this.players.forEach((player) => {
            player.START(StartEvent)
        });
    }
    UPDATE(UpdateEvent){
        this.maps.UPDATE({
            keys:this.controller.GetKeys(),
        })
        this.players.forEach((player) => {
            player.UPDATE({
                keys:this.controller.GetKeys(),
                tiles: this.maps.tiles
            })
        });


    }
    DRAW(DrawEvent){
        this.maps.DRAW(DrawEvent)
        this.players.forEach(player => {
            player.DRAW(DrawEvent)
        });
    }
    STOP(StopEvent){
        this.maps.STOP(StopEvent)
        this.players.forEach((player) => {
            player.STOP(StopEvent)
        });
    }
}