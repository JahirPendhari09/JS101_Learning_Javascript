let person = new Object();

person.name = "jahir";
person.age =25;
person.phone = 8668953367;
person.location ="Kolhapur";
person.driving_license = false;
person.breakfast = "yes";

console.log(person);

person.phone = 8007631530;
person.age =24;
person.driving_license = true;

console.log(person);

delete person["breakfast"];
delete person["driving_license"];

console.log(person);

for(let i in person){
  console.log(i);
}