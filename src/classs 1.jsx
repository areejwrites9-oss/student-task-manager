import React from "react";


function App() {

 // =====================================================



 // 1. VARIABLES



 // =====================================================







 // var



 // We can reassign and redeclare var.



 var userName = "John Doe";



 userName = "Ayesha";







 var userName = "Kashaf";







 console.log("var:", userName);











 // let



 // We can reassign let but cannot redeclare it



 // in the same scope.







 let age = 25;







 age = 26;







 console.log("let:", age);











 // const



 // We cannot reassign or redeclare const.







 const country = "Pakistan";







 console.log("const:", country);











 // =====================================================



 // 2. DATA TYPES



 // =====================================================







 const name = "Kashaf"; // String



 const studentAge = 25; // Number



 const isStudent = true; // Boolean



 const emptyValue = null; // Null



 let notAssigned; // Undefined







 console.log("Name:", name);



 console.log("Age:", studentAge);



 console.log("Student:", isStudent);



 console.log("Empty:", emptyValue);



 console.log("Undefined:", notAssigned);







 console.log(typeof name);



 console.log(typeof studentAge);



 console.log(typeof isStudent);











 // =====================================================



 // 3. ARITHMETIC OPERATORS



 // =====================================================







 const num1 = 20;



 const num2 = 5;







 const addition = num1 + num2;



 const subtraction = num1 - num2;



 const multiplication = num1 * num2;



 const division = num1 / num2;



 const remainder = num1 % num2;



 const power = num1 ** 2;







 console.log("Addition:", addition);



 console.log("Subtraction:", subtraction);



 console.log("Multiplication:", multiplication);



 console.log("Division:", division);



 console.log("Remainder:", remainder);



 console.log("Power:", power);







 /*



 + Addition



 - Subtraction



 * Multiplication



 / Division



 % Remainder



 ** Power



 */











 // =====================================================



 // 4. ASSIGNMENT OPERATORS



 // =====================================================







 let score = 10;







 score += 5;



 console.log("score += 5:", score);







 score -= 2;



 console.log("score -= 2:", score);







 score *= 2;



 console.log("score *= 2:", score);







 score /= 2;



 console.log("score /= 2:", score);







 /*



 score += 5



 means:



 score = score + 5



 */











 // =====================================================



 // 5. COMPARISON OPERATORS



 // =====================================================







 const marks = 75;







 console.log("Greater:", marks > 50);



 console.log("Less:", marks < 50);



 console.log("Greater/equal:", marks >= 75);



 console.log("Less/equal:", marks <= 75);



 console.log("Equal:", marks === 75);



 console.log("Not equal:", marks !== 75);







 /*



 > Greater than



 < Less than



 >= Greater than or equal



 <= Less than or equal



 === Strict equality



 !== Strict inequality



 */











 // =====================================================



 // 6. == VS ===



 // =====================================================







 console.log(5 == "5"); // true // true because of type conversion



 console.log(5 === "5"); // false// false because of type conversion







 /*



 == checks value after type conversion



 === checks value AND type







 Prefer === in modern JavaScript.



 */











 // =====================================================



 // 7. LOGICAL OPERATORS



 // =====================================================







 const myAge = 25;



 const hasID = true;







 // AND



 console.log(



 "AND:",// true if both conditions are true *



 myAge >= 18 && hasID



 );







 // OR



 const isAdmin = false;



 const isTeacher = true;







 console.log(



 "OR:",// true if either condition is true +



 isAdmin || isTeacher



 );



 //Not


 const loggedIn = true;







 console.log(



 "NOT:",



 !loggedIn



 );







 /*



 && AND



 || OR



 ! NOT



 */











 // =====================================================



 // 8. INCREMENT / DECREMENT



 // =====================================================







 let counter = 1;







 counter++;



 console.log("Increment:", counter);







 counter++;



 console.log("Increment:", counter);







 counter--;



 console.log("Decrement:", counter);







 /*



 counter++







 means:







 counter = counter + 1



 */







 // =====================================================



 // RETURN JSX



 // =====================================================







 return (







 <div>







 <h1>



 JavaScript + React Basics



 </h1>







 <h2>



 Variables



 </h2>







 <p>



 Name: {name}



 </p>







 <p>



 Age: {studentAge}



 </p>







 <h2>



 Arithmetic Operators



 </h2>







 <p>



 Addition: {addition}



 </p>







 <p>



 Subtraction: {subtraction}



 </p>







 <p>



 Multiplication: {multiplication}



 </p>







 <p>



 Division: {division}



 </p>







 <p>



 Remainder: {remainder}



 </p>











 </div>







 );







}







export default App;

