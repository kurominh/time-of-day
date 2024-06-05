let myDate = new Date();
let myHour = myDate.getHours();
let myGreeting = "";
let myColor = "";
let myPic = "";

if (myHour >= 5 && myHour < 12) {
  myGreeting = "Good Morning!";
  myColor = "pink";
  myPic = "morning.jpg";
} else if (myHour >= 12 && myHour < 18) {
  myGreeting = "Good Afternoon!";
  myColor = "orange";
  myPic = "afternoon.jpg";
} else if (myHour >= 18 && myHour < 23) {
  myGreeting = "Good Evening!";
  myColor = "purple";
  myPic = "evening.jpg";
} else {
  myGreeting = "Good Night!";
  myColor = "dark purple";
  myPic = "night.jpg";
}
//custom greeting
document.getElementById("my-greeting").innerHTML = myGreeting;
document.querySelector("html").style.backgroundColor = myColor;
document.getElementById("my-pic").src = "images/" + myPic;
