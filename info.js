//var x = 1; // global 
function V(){
	var x = 1;
	x = x+3;
	return x; 

}
function X(){
	return ""; 
}
function A(){
	window.alert("Testing on key down");
}

function B(){
	document.getElementById("out").innerHTML = "Testing";

}

var family = ["dad","mom","sister","brother"];
document.getElementById("arrayOutput").innerHTML = "original array: " + "["+ family + "]";
family.pop(); 
document.getElementById("arrayPop").innerHTML = "pop(): " + family;
family.push("dog"); 
document.getElementById("arrayPush").innerHTML = "push(): " + family;
family.shift();
document.getElementById("arrayShift").innerHTML = "shift(): " + family;
family.unshift("Grandma"); 
document.getElementById("arrayUnShift").innerHTML = "unshift(): " + family;

var name = "Kristian"; 
var sentence="Kristian is a Computer Scientist"
var trimSentence="  Kristian is a Computer Scientist  "
var amount = name.length; 
var findIndex= sentence.indexOf("Computer");
var searchString= sentence.search("Scientist");
var subString1 = sentence.substring(5,8); // position 5 and 8-1 but cannot have negatives
var sliceString = sentence.slice(5,8); // position 5 and 8-1 similar but can have negatives
var subString2 = sentence.substr(9,2); 
var text1="Kristian"; 
var text2="Willey"
var conCat = text1.concat("",text2);
var trim = sentence.trim(); 
var sToA = "a,b,c,d,e,f,g";

document.getElementById("name").innerHTML = "Name String: " + name; 
document.getElementById("sentence").innerHTML = "Sentence String: " + sentence; 
document.getElementById("length").innerHTML = "Length of " + name +": " + amount;
document.getElementById("indexOf").innerHTML = "Index of Computer" + ": " + findIndex; 
document.getElementById("search").innerHTML = "Search string of Science" + ": " + searchString; 
document.getElementById("sub1").innerHTML = "Sub String of " + name + ": " + subString1; 
document.getElementById("slice").innerHTML = "Slice String:" + sliceString; 
document.getElementById("sub2").innerHTML = "Substr: " + subString2; // position, size
document.getElementById("concat").innerHTML = "Concatenation of " + text1 + " and " + text2 + ": " + conCat; 
document.getElementById("trim").innerHTML = "Remove Spaces from both sides: " + trimSentence; 
document.getElementById("StringtoArr").innerHTML = "Convert String to Array: " + sToA; 
document.getElementById("StringtoArr").innerHTML = "Convert String to Array: " + StringtoArr; 

var num = "abs123"; 
var number = "2019";
var Number = Number("143"); // "abs123" prints NaN
var string = num.toString(); 

//document.getElementById("original").innerHTML = "Original number: " + number; 
document.getElementById("toString").innerHTML = "toString(): " + string; 
document.getElementById("valueOf").innerHTML = "valueOf(): " + number + ": " + number.valueOf(); 
document.getElementById("number").innerHTML = "Number(): " + Number; 

var instances1 = 0; 
var instances2= 0; 
var text1=""; 
var text2=""; 

for(index = 0; index < num.length; index++){
	instances1++; 
	text1+= "Instances: " + instances1 + "<br>"; 
}
document.getElementById("for").innerHTML = "For Loop: " + text1 + "<br>"; 

do{
	text2+= "Instances: " + instances2 + "<br>";
	instances2++; 
}
while(instances2 < 4);
document.getElementById("dowhile").innerHTML = "doWhile Loop: " + text2 + "<br>"; 


