class Frame{
    backFrame = 0
    frame = 0
    nextFrame = 0

    time = 0
    timeMax = 20


    constructor(config){
    }
  
    get Frame(){
        return this.frame
    }
    START(){

    }
    UPDATE(UpdateEvent){
        
        this.time += 0.5

        if(this.time >= this.timeMax){
            this.time = 0
            if(this.frame < 1) {
                this.frame += 1
            }
            if(this.frame >= 1){
                this.frame += 2
            }
            
        } 
        

        if( this.frame >= 20) {
            this.frame = 0
        }
    }
    DRAW(){

    }
    STOP(){

    }
}