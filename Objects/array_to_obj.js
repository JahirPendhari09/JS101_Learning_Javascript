let student =["goku","raju","gobi","nami"];

let score= [44,56,54,67];

let final_data = [];

for(let i=0; i<student.length; i++){
  let obj ={};
  obj["name"] = student[i];
  obj["score"] = score[i];

  final_data.push(obj);
}

console.log(final_data)