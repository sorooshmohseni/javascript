var car={
    make:'ford',
    model:'mustang',
    year:'1969',
    details:{
        color:['red', 'green', 'blue'],
        wheels:4
    }
}
console.log(car.make);
car.make="bmw";
car['make']="Toyota"
console.log(car.make);
console.log(car["make"])