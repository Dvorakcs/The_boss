class EMap{
    #background = null
    #CollisionMap = null

    constructor(config){
        this.#background = new Sprite({
            position:{x:0,y:0},
            imageSrc:config.imageSrc
        })
        this.#CollisionMap = config.collisionBlocks
    }

    get COLLISION(){
        return this.#CollisionMap;
    }

    UPDATE(EventUpdate){

    }

    DRAW(EventDraw){
        this.#background.DRAW(EventDraw);
        this.#CollisionMap.forEach((collisionBlocks) => {
            collisionBlocks.DRAW(EventDraw)
        })
    }
}