// alert("Something!");
// document.write("Something!");
console.log("Something!");

// variable e Letter, Number, _ ,$ ei 4ta use kora jabe just. variable er nam digit diye shuru hbena

var num =20.5;
num= toString(num);
num= parseFloat(num);
console.log(typeof(num));


 var number=2.537397329;
 console.log(number.toFixed(2));
 console.log(number.toPrecision(2));
 console.log(typeof(Number("12.5")));



// Manual Concatenation
 var firstName = "Sinthia" , lastName =" Islam" ;
 var fullName = firstName + lastName;
 document.write("My name is " + fullName + " Supti <br> <br>");

 
var text = "KuShtia";
document.write("Number of Character: " + text.length +"<br> <br>");
// Or
var len= text.length;
document.write("Number of Character: " + len +"<br> <br>");

document.write(text.charAt(2) + "<br> <br>"); 

// Slice
var text0= text.slice(2,5);
document.write(text0 + "<br> <br>");



// User input
var text1= prompt("Enter Your Text: ");
var text2= prompt("Enter Your Text: ");
document.write("Number of Character: " + text1.length +"<br> <br>");
text1= text1.toUpperCase();
text2= text2.toUpperCase();
document.write(text1 + "<br> <br>");
document.write(text2 + "<br> <br>");

// Concatenation using library function
document.write(text1.concat(text2) + "<br> <br>");



var num1= prompt("Enter First Number: ");  //prompt diye user input neoa hoy jeta seta string e thake
var num2= prompt("Enter Second Number: ");

num1 = parseInt(num1 , 10);  // 10 cz eta decimal number er base
num2 = parseInt(num2 , 10);

var sum , sub;
sum= num1+num2;
document.write( num1 + "+" + num2 + " = " + sum + "<br><br>")

sub= num1 - num2;
document.write( num1 + "-" + num2 + " = " + sub + "<br><br>")