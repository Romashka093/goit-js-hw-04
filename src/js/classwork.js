"use strict";

console.warn("ClassWork");

// TASK-01

const createCar = name => {
  let speedOfCar = 0;

  return function(speed) {
    speedOfCar += speed;
    name = name + "!";
    console.log(`${name} speed: ${speedOfCar}`);
  };
};

const vaz = createCar("VAZ");

vaz(10); // VAZ speed 10
vaz(20); // VAZ speed 30
vaz(5); // VAZ speed 35

const bmw = createCar("BMW");

bmw(5); // BMW speed 5
bmw(6); // BMW speed 11
bmw(7); // BMW speed 18
