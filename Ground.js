class Ground{
constructor(x,y,width,height){
   var options={
       isStatic=true
   } 
   this.body=Bdies.rectangle(x,y,width,height);
   this.height=height;
   this.width=width;
   World.add(world, this.body);
}

display(){
    var pos=this.body.position;
    rectangleMode(CENTER);
    fill(brown);
    rec(pos.x,pos.y,width,height);
}

}