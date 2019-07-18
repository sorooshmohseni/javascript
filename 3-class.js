class Color{
    constructor(color, power){
        this.ColorCode=color;
        
    }
    present(x){
        return x+" color is: "+this.ColorCode;
    }
}
myColor= new Color("Blue");
console.log(myColor.present("my favorite"));