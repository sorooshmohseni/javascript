class Car{
    constructor(brand){
        this.carname=brand;
    }
    present(){
        return "Ihave a"+ this.carname;
    }
}
    class Model extends Car{
        constructor(brand, mod){
            super(brand);
            this.model=mod;
        }
    
        show(){
            return this.present()+ ', it is a'+this.model;
        }
    }

myCar=new Model("Ford", "mustang");
console.log(myCar.present())