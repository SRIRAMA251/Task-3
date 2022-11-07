let  cargoHold=['ozygen tanks','space suits','parrot','instruction manual','meal packs','slinky','security blanket'];
cargoHold[5]='space tether';
console.log(cargoHold);
cargoHold.pop();
console.log(cargoHold);
console.log(cargoHold.shift());
cargoHold.pop();
console.log(cargoHold);
console.log("The array [" +cargoHold+"] has a length of "+cargoHold.length);