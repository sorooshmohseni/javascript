var car1={
    make: 'ford',
    model: 'mustang',
    year:1969,
    details:{
        colors:['red', 'green', 'black'],
        wheels:4
    },
    run:function(){
        return "speed up to 220";
    },
    summary:function(){
        return 'car details : '+this.model+','+this.year;
    }


}
var car2={
    make: 'ford',
    model: 'mustang',
    year:1969,
    details:{
        colors:['red', 'green', 'black'],
        wheels:4
    },
    run:function(){
        return "speed up to 220";
    },
    summary:function(){
        return 'car details : '+this.model+','+this.year;
    }


}
car1=car2;
console.log(car1===car2);