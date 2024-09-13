var yourname = prompt("YOUR NAME")
var english = +prompt("ENGLISH");
var urdu = +prompt("URDU");
var math = +prompt("MATH");
var physics = +prompt("PHYSICS");
var chemistry = +prompt("CHEMISTRY");
var computer = +prompt("COMPUTER");

var totalmark = english + urdu + math + physics + chemistry;
var percentage = totalmark / 500 * 100;

if(english <=100 && urdu <= 100 && math <= 100 && physics <= 100 && chemistry <= 100 && computer <= 100)
    alert("enter your correct number");

if (english <= 49 || urdu <=49 || math <= 49 || physics <= 49 || chemistry <= 49|| computer <= 49)
alert ("you are fail")
    

else if (percentage <= 100 && percentage >= 90) {
    alert ("Grade: A+1:" +  "percentage:" + percentage  + "totalmark:" + totalmark + "yourname:" + yourname);        
}

else if (percentage <= 89 || percentage >= 70) {
    alert ("Grade: B:" + "percentage:" + percentage + "totalmark:" + totalmark + "yourname:" + yourname);
}

else if (percentage <= 69 || percentage >= 60) {
    alert ("Grade: c:" + "percentage:" + percentage + "totalmark:" + totalmark + "yourname:" + yourname);
}

else if (percentage <= 59 || percentage >= 50) {
    alert ("Grade: d:" + "percentage:" + percentage + "totalmark:" + totalmark + "yourname:" + yourname);
    
}


















