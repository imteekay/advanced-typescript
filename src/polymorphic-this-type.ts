// Polymorphic this type

class Vehicle {
  drive() {
    return this;
  }
}

class Car extends Vehicle {}

class Bus extends Vehicle {}

function printThisValue(instance: Vehicle) {
  const thisValue = instance.drive();
  console.log(thisValue);
}

printThisValue(new Vehicle()); // Vehicle {}
printThisValue(new Car()); // Car {}
printThisValue(new Bus()); // Vehicle {}
