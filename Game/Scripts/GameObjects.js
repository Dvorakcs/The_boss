class GameObjects {
    position = null
    width = null
    height = null
    energy = 100
    velocity = {
        x: 4.5,
        y: 0.1
    }
   gravity = 0.5
   jump = null
   Sprite = null
   isMove = false
   direction = 0
   id = "Player"
    constructor(config) {
        this.position = config.position,
            this.width = config.width,
            this.height = config.height
            this.id = config.id ?? "Player"
            this.Sprite = new Sprite({
                src:'/Game/Images/Mario/Mario_plataform_mini.png',
                position: this.position,
                width:16,
                height:16,
                imageWidth: 32,
                imageHeight: 32,
                cut:{x:32,y:32},
                id:this.id,
                maxFrame:2
            })
    }

    START(StartEvent) {
        this.Sprite.START(StartEvent)
    }

    UPDATE(EventUpdate) {
        this.moveTo(EventUpdate.keys);
        this.Sprite.UPDATE({
            isMove:this.isMove,
            direction: this.direction
        })
       
    
        if(EventUpdate.tiles){
            EventUpdate.tiles.forEach((tile) => {
                
                if(this.position.x + this.width + this.velocity.x >= tile.position.x  &&
                    this.position.y + this.height + this.velocity.y >= tile.position.y  && 
                    this.position.x + this.velocity.x <= tile.position.x + tile.width &&
                    this.position.y + this.velocity.y <= tile.position.y + tile.height ){
                        this.position.y = tile.position.y - this.height - this.velocity.y
                        this.velocity.y = 0
                        this.jump = false
                    }
            });
        }
        if (this.position.y + this.height + this.velocity.y>= 500) {
            this.position.y = 500 - this.height - this.velocity.y
            this.velocity.y = 0
            this.jump = false
        }

        this.velocity.y += this.gravity
        this.position.y += this.velocity.y
    }
    moveTo(key) {
        if(key.A == true){
            this.position.x -= this.velocity.x
            this.isMove = true
            this.direction = 0
        }
        if(key.D == true){
            this.position.x += this.velocity.x 
            this.isMove = true
            this.direction = 1
        }
        if(!key.D && !key.A){
            this.isMove = false
        }

        if(key.W == true && !this.jump){
            this.velocity.y -= 12
            this.jump  = true
        }
        
    }
    DRAW(DrawEvent) {
        this.Sprite.DRAW(DrawEvent)
       DrawEvent.fillStroke = "black"
       DrawEvent.strokeRect(this.position.x, this.position.y, this.width, this.height)
    }
    STOP(StopEvent) {

    }
}