const mapLevelOne = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
   0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0,
   0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
   0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
   0, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
   0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0,
   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


Array.prototype.parse2D = function (){
   const rows = []
   for(let i = 0; i < this.length; i+= 16){
      rows.push(this.slice(i,i+16))
   }

   return rows;
}
const collisionBlocks = []
const parsedCollisions = mapLevelOne.parse2D();
parsedCollisions.forEach((row,y) => {
   row.forEach((symbol,x) => {
      if(symbol == 292){
         collisionBlocks.push(new Block({
            position:{
               x:x * 64,
               y:y * 64
            }
         }))
      }
   })
});