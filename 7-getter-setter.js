class Car{
    constructor(brand){
        this.carname=brand;
    }
    get cname(){
        return this.carname;
    }
    set cname(x){
        this.carname=x;
    }
}
mycar=new Car("l90");
mycar.cname="ford";
console.log(mvcar.cname);