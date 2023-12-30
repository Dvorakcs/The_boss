class Player{
    #Position = {
        x:0,
        y:0
    };
    #Velocity = {
        x:0,
        y:0
    }
    #Width = 0;
    #Height = 0;
    #Sides = {
        bottom:this.#Position.y + this.#Height,
        top:this.#Position.y,
        left:this.#Position.x,
        right:this.#Position.x + this.#Width
    }
    #Gravity = 1
    #Sprite = null
    #CollisionBlocks = null
    constructor(config){
        this.#Position = config.position ?? {  x:0,y:0}
        this.#Width = config.width ?? 0
        this.#Height = config.height ?? 0
        this.#Sprite = new Sprite({
            position:this.#Position,
            imageSrc:'/Game/src/Image/king/idle.png',
            frameRate:11
        })
       this.#CollisionBlocks = config.collisionBlock
    }

    get Position(){
        return this.#Position;
    }
    get Width(){
        return this.#Width;
    }
    get Height(){
        return this.#Height;
    }

    UPDATE(EventUpdate){

        this.#Width = this.#Sprite.WIDTH
        this.#Height = this.#Sprite.HEIGHT
        this.ApplyMoveX()
        this.CollisionCheckHorizontal()
        this.ApplyGravity()
        this.CollisionCheckVertical()
        this.PlayerMove(EventUpdate.keySet)
        this.#Sprite.UPDATE(EventUpdate)
    }
    ApplyMoveX(){
        this.#Position.x += this.#Velocity.x
    }
    CollisionCheckHorizontal(){
        for (let block = 0; block < this.#CollisionBlocks.length; block++) {
            
            const collisionBlock = this.#CollisionBlocks[block]

            if(this.#Position.x <= collisionBlock.POSITION.x + collisionBlock.WIDTH &&
               this.#Position.x + this.#Width >= collisionBlock.POSITION.x &&
               this.#Position.y + this.#Height >=  collisionBlock.POSITION.y &&
               this.#Position.y <=  collisionBlock.POSITION.y + collisionBlock.HEIGHT){
                 //verify collision on X axis to left 
                if(this.#Velocity.x < 0) {
                    this.#Position.x = collisionBlock.POSITION.x + collisionBlock.WIDTH + 0.01
                    break;
                } 
                if(this.#Velocity.x > 0) {
                    this.#Position.x = collisionBlock.POSITION.x - this.#Width - 0.01
                    break;
                } 
                
            }
        }
    }
    ApplyGravity(){
        this.#Velocity.y += this.#Gravity
        this.#Position.y += this.#Velocity.y
       // this.#Sides.bottom = this.#Position.y + this.#Height + this.#Velocity.y
    }
    CollisionCheckVertical(){
        for (let block = 0; block < this.#CollisionBlocks.length; block++) {
            
            const collisionBlock = this.#CollisionBlocks[block]

            if(this.#Position.x <= collisionBlock.POSITION.x + collisionBlock.WIDTH &&
               this.#Position.x + this.#Width >= collisionBlock.POSITION.x &&
               this.#Position.y + this.#Height >=  collisionBlock.POSITION.y &&
               this.#Position.y <=  collisionBlock.POSITION.y + collisionBlock.HEIGHT){
                 //verify collision on X axis to left 
                if(this.#Velocity.y < 0) {
                    this.#Velocity.y = 0
                    this.#Position.y = collisionBlock.POSITION.y + collisionBlock.HEIGHT + 0.01
                    break;
                } 
                if(this.#Velocity.y > 0) {
                    this.#Velocity.y = 0
                    this.#Position.y = collisionBlock.POSITION.y - this.#Height - 0.01
                    break;
                } 
                
            }
        }
    }
   
    PlayerMove(keySet){
        if(keySet.W.pressed && this.#Velocity.y === 0){
            this.#Velocity.y = -20
        }
        if(keySet.A.pressed){
            this.#Velocity.x = -4
        }
        if(keySet.D.pressed){
            this.#Velocity.x = 4
        }
        if(!keySet.D.pressed && !keySet.A.pressed){
            this.#Velocity.x = 0
        }
    }
    DRAW(EventDraw){
        EventDraw.fillRect(this.#Position.x,this.#Position.y,this.#Width,this.#Height)
        this.#Sprite.DRAW(EventDraw)
    }
}