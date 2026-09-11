import React from "react";
function condition() {
    let  Age= 18;      
    let vote; 
   if (Age >= 18 && Age <= 65) {
    console.log("You are eligible to vote.");
  }
else if (Age > 65) {
    console.log("You are eligible to vote, but you are a senior citizen.");
}
else {
    console.log("You are not eligible to vote.");
}
return(
  <>
  
  
  
  
  
 <p>age to vote: {Age}</p> 
 </>


)


}
