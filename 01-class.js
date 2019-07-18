class Car{
    constructor(brand){
        this.carname=brand;
    }
    present(){
        return "I have a"+this.carname;
    }
}
mycar=new Car("Ford");
console.log(mycar.present());

mycar.carname="BMW"
console.log(mycar.present());