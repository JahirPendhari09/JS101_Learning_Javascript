let lower =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let upper =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let character = "r";

for(let i=0; i<lower.length; i++){
  if(lower[i]==character){
    character = upper[i];
  }
}

console.log(character);