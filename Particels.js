class Particals{
constructor(x,y,width,height){
    var options={
        isStatic=false
    }
    this.body=Bodies.eclipse(x,y,diameter,options)
    diameter=4;
    World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    eclipseMode(CENTER);
    fill("yellow");
    eclipse(pos.x,pos.y,this.diameter);
}
}