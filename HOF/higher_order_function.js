
// Caluating Area , Circumference and Diameter of Given Array

let radius =[3,1,2,4];

// Created  Function for Area
let area = function(radius){
    return Math.PI*radius*radius;
};

// Created  Function for  Circumference
let circumference = function(radius){
    return 2*Math.PI*radius;
};

// Created  Function for Diameter
let diameter = function (radius){
    return 2*radius;
};

// Main function all values stored and passes over here
let calculate =function(radius, logic){
    let arr =[];
    for(let i=0; i<radius.length; i++){
        arr.push(logic(radius[i]));
    }
    return arr;
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));

// Output for area
// [
//     28.274333882308138,
//     3.141592653589793,
//     12.566370614359172,
//     50.26548245743669
//   ]

// OutPut for Circumference
//   [
//     18.84955592153876,
//     6.283185307179586,
//     12.566370614359172,
//     25.132741228718345
//   ]

// Output for Diameter
//   [ 6, 2, 4, 8 ]