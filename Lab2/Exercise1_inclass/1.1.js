var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log("Today is : " + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var p = (hour >= 12)? " PM":" AM";
hour = (hour >= 12)? hour - 12: hour;
if (hour===0 && p==='PM') 
{ 
  if (minute===0 && second===0)
  { 
      hour=12;
      p='Noon';
  } 
  else
  { 
      hour=12;
      p=' PM';
  } 
} 
if (hour===0 && p==='AM') 
{ 
  if (minute===0 && second===0)
  { 
      hour=12;
      p='Midnight';
  } 
  else
  { 
      hour=12;
      p=' AM';
  } 
} 
console.log("Current Time : "+hour + p + " : " + minute + " : " + second);