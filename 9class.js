class test{
    constructor(test){
        this._message=test;
    }
    show(){
        return this._message;
    }
}
mytest=new test("this is a test");
console.log(mytest.show());