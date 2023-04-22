let str ="zoro";

let obj ={};

for(let i=0; i<str.length; i++){
  if(obj[str[i]]==undefined){
    obj[str[i]] = 1;
  }
  else{
    obj[str[i]]++;
  }
}

for(let i in obj){
  console.log(i +":"+ obj[i]);
}