class Burger{
    constructor(type){
        this.burgerType=type;
    }
    static Cooking(level){
        return level +" Coal, "; //+this.burgerType ;
    }
}
myBurger=new Burger("Rost");
console.log(myBurger.burgerType);
console.log(Burger.Cooking("High-level"));
