class GameObjects {
    id = "Player"
    position = null
    width = null
    height = null

    keys = null

    velocity = {
        x: 4.5,
        y: 0.1
    }
    isMove = false
    direction = "Right"

    gravity = 0.5
    jump = null

    Sprite = null
    frame = {
        Idle:{
            left:[159,0],
            right:[198,0]
        },
        Walk:{
            left:[[40,0],[159,0]],
            right:[[198,0],[317,0]]
        },
        Run:{
            left:[159,10],
            right:[198,40]
        },
        Jump:{
            left:[159,40],
            right:[198,40]
        },

    }
    timeFrame = 0
    timeFrameMax = 8
    tFrame = 0
    frameSelected = null
    constructor(config) {
            this.position = config.position,
            this.width = config.width,
            this.height = config.height
            this.id = config.id ?? "Player"
            this.Sprite = new Sprite({
                src:'/Game/Images/Mario/mariospritesheet.png',
                position: this.position,
                width:32,
                height:32,
                imageWidth: 64,
                imageHeight: 64,
                id:this.id,
               
            })
    }

    START(StartEvent) {
        this.Sprite.START(StartEvent)
    }

    UPDATE(EventUpdate) {
        if(EventUpdate != null){
            this.keys = EventUpdate.keys
        }
        this.moveTo();

        this.Sprite.UPDATE({
            frame: this.frameSelected
        })
       
    
        if(EventUpdate.tiles){
            EventUpdate.tiles.forEach((tile) => {
                
                if(this.position.x +23 + this.width + this.velocity.x >= tile.position.x  &&
                    this.position.y + this.height + this.velocity.y >= tile.position.y  && 
                    this.position.x+ 23 + this.velocity.x <= tile.position.x + tile.width &&
                    this.position.y + this.velocity.y <= tile.position.y + tile.height ){
                        
                       // this.velocity.y = 0
                       this.isCollide = true

                       if(this.direction == "Jump-Left" || this.direction == "Jump-Right"){
                            this.jump = true
                            this.velocity.y += 5
                            
                       }
                        
                       
                    }else this.isCollide = false
            });
        }

        if(this.isCollide){
            return
        }

        if (this.position.y + this.height + this.velocity.y>= 500) {
            this.position.y = 500 - this.height - this.velocity.y
            this.velocity.y = 0
            this.jump = false
        }

        this.velocity.y += this.gravity
        this.position.y += this.velocity.y
    }
    moveTo() {

        if(this.keys.W == true && !this.jump){
            this.velocity.y -= 12
            this.jump  = true
            
            if(this.direction == "Left" || this.direction == "Jump-Left"){
                this.frameSelected = this.frame.Jump.left
                this.direction = "Jump-Left"
               }
            if(this.direction == "Right" || this.direction == "Jump-Right"){
                   this.frameSelected = this.frame.Jump.right
                   this.direction = "Jump"
                   this.direction = "Jump-Right"
    
            }
        }

        if(this.keys.A == true){
            this.position.x -= this.velocity.x
            this.isMove = true
            this.direction = "Left"
            this.timeFrame++
            if(this.timeFrame >= this.timeFrameMax) {
                this.timeFrame = 0
                this.tFrame += 1


            }

            if(this.tFrame > 1){
                this.tFrame = 0 
            }
            if(!this.keys.W)
            this.frameSelected = this.frame.Walk.left[this.tFrame]
        }
        if(this.keys.D == true){
            this.position.x += this.velocity.x 
            this.isMove = true
            this.direction = "Right"
            this.timeFrame++
            if(this.timeFrame >= this.timeFrameMax) {
                this.timeFrame = 0
                this.tFrame += 1


            }

            if(this.tFrame > 1){
                this.tFrame = 0 
            }
            if(!this.keys.W)
            this.frameSelected =  this.frame.Walk.right[this.tFrame]
        }
       
        

        if(!this.keys.D && !this.keys.A && !this.keys.W){
            this.isMove = false
            if(this.direction == "Left" || this.direction == "Jump-Left"){
             this.frameSelected = this.frame.Idle.left

            }
            if(this.direction == "Right" || this.direction == "Jump-Right"){
                this.frameSelected = this.frame.Idle.right
   
               }
        }

        
    }
    DRAW(DrawEvent) {
        this.Sprite.DRAW(DrawEvent)
      //DrawEvent.fillStroke = "black"
        DrawEvent.strokeRect(this.position.x + 23, this.position.y, this.width, this.height)
    }
    STOP(StopEvent) {

    }
}