// Print Hollow Rectangle 

let n=10;
for(let i=1; i<=n; i++){
  let a ="";

  for(let j=1; j<=n; j++){ 
    if(i==1 || i==n || j==1 || j==n){
      a +="*";
    }else{
      a +=" ";
    }
  }
  console.log(a);
}