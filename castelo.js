class Castelo{
constructor(){
    this.w=width/4;
    this.h=2*height/3;
    this.x=50;
    this.y=height-this.h+40;
}
mostrar(){
    image(imgcastelo,this.x,this.y,this.w,this.h);
}
}
  