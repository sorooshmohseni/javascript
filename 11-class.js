class car{
    constructor(brand){
        this._carname=brand;
    }
    set cname(x){
        this._carname=x;
    }
    get cname(){
        return this._carname;
    }
}
var testcar=new car("l90");