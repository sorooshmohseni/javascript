class Food{
    constructor(type){
        this.foodType=type;
    }
    static cooking(){
        return "mellow cooking";
    }
}
myFood=new Food("sea food")
console.log(myFood.foodType);
console.log(Food.cooking());
mySecondFood=new Food("Fast-Food");
console.log(Food.cooking());