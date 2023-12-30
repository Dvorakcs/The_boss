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
    #Gravity = 1
    #Sprite = null
    #CollisionBlocks = null
    #HitBox = {
        position:{
            x:0,
            y:0
        },
        width:50,
        height:53
    }
    constructor(config){
        this.#Position = config.position ?? {  x:0,y:0}
        this.#Sprite = new Sprite({
            position:this.#Position,
            imageSrc:'/Game/src/Image/king/idle.png',
            frameRate:11
        })
        this.#Width = this.#Sprite.WIDTH
        this.#Height = this.#Sprite.HEIGHT
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
       
        this.ApplyMoveX()
        this.UpdateHitBox()
        this.CollisionCheckHorizontal()
        this.ApplyGravity()
        this.UpdateHitBox()
        this.CollisionCheckVertical()
        this.PlayerMove(EventUpdate.keySet)
        this.#Sprite.UPDATE(EventUpdate)
        
    }
    UpdateHitBox(){
        this.#HitBox.position = {
            x:this.#Position.x + 58,
            y:this.#Position.y + 34
        }
    }
    ApplyGravity(){
        this.#Velocity.y += this.#Gravity
        this.#Position.y += this.#Velocity.y
       // this.#Sides.bottom = this.#Position.y + this.#Height + this.#Velocity.y
    }
    ApplyMoveX(){
        this.#Position.x += this.#Velocity.x
    }
    CollisionCheckHorizontal(){
        for (let block = 0; block < this.#CollisionBlocks.length; block++) {
            
            const collisionBlock = this.#CollisionBlocks[block]

            if(this.#HitBox.position.x <= collisionBlock.POSITION.x + collisionBlock.WIDTH &&
               this.#HitBox.position.x + this.#HitBox.width >= collisionBlock.POSITION.x &&
               this.#HitBox.position.y + this.#HitBox.height >=  collisionBlock.POSITION.y &&
               this.#HitBox.position.y <=  collisionBlock.POSITION.y + collisionBlock.HEIGHT){
                 //verify collision on X axis to left 
                if(this.#Velocity.x < -0) {
                    const offset = this.#HitBox.position.x - this.#Position.x
                    this.#Position.x = collisionBlock.POSITION.x + collisionBlock.WIDTH - offset + 0.01
                    break;
                } 
                if(this.#Velocity.x > 0) {
                    const offset = this.#HitBox.position.x- this.#Position.x  + this.#HitBox.width
                    this.#Position.x = collisionBlock.POSITION.x - offset - 0.01
                    break;
                } 
                
            }
        }
    }
    CollisionCheckVertical(){
        for (let block = 0; block < this.#CollisionBlocks.length; block++) {
            
            const collisionBlock = this.#CollisionBlocks[block]

            if(this.#HitBox.position.x <= collisionBlock.POSITION.x + collisionBlock.WIDTH &&
               this.#HitBox.position.x + this.#HitBox.width >= collisionBlock.POSITION.x &&
               this.#HitBox.position.y + this.#HitBox.height >=  collisionBlock.POSITION.y &&
               this.#HitBox.position.y <=  collisionBlock.POSITION.y + collisionBlock.HEIGHT){
                 //verify collision on X axis to left 
                if(this.#Velocity.y < -0) {
                    this.#Velocity.y = 0
                    const offset = this.#HitBox.position.y - this.#Position.y
                    this.#Position.y = 
                    collisionBlock.POSITION.y + collisionBlock.HEIGHT - offset + 0.01
                    break;
                } 
                if(this.#Velocity.y > 0) {
                    this.#Velocity.y = 0
                    const offset = this.#HitBox.position.y - this.#Position.y  + this.#HitBox.height
                    this.#Position.y = collisionBlock.POSITION.y - offset - 0.01
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
       // EventDraw.fillRect(this.#HitBox.position.x,this.#HitBox.position.y,this.#HitBox.width,this.#HitBox.height)
        this.#Sprite.DRAW(EventDraw)
    }
}