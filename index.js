const x = prompt("What is your age?");
const z = 11;
// alert ("What is your age?");

if(!isNaN(x)){
  if(x<=11)
  {
    alert(z-x +" years is left for you to go to Hogwarts");
  } else{
    alert("Sorry you are late")
  }
  console.log (z-x);
}else{
alert("Not number inserted");
}
console.log(x*z);
