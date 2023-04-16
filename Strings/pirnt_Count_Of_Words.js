let a = "abdul joffy nani mani";
let space =0;
for(let i=0; i<a.length; i++)
{
  if((a[i] ==" ") && (i<a.length-1))
  {
    space++;
  }
}
console.log("Words in the String :",space+1);