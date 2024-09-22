var name = prompt("What is your name?");
var time = parseInt(prompt("What time is it?"), 10);

var remark;

if (time >= 8 && time < 12) {
    remark = "Good Mornin";



} else if (time >= 12 && time < 17) {
    remark = "Good Afternoon";
} 



else if (time > 17 && time < 19) {
    remark = "Good Evening"
}


else if (time > 19 && time < 21) {
    remark = "Good night"
}


else if (time >21 && time < 8) {
remark = "It's probably time for bed"
}



alert(remark + ", " + name + "!");