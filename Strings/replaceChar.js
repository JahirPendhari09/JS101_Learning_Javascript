let str = "go%.a$.";

let ans="";
let i=0;
while(i<str.length){
  if(str[i] =="%"){
    ans +="h";
  }
  else if(str[i]=="$"){
    ans +="n";
  }
    else if((str[i] ==".")){
      ans += "";
    }
  else{
    ans += str[i];
  }
  i++;
}

console.log(ans);