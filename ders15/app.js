/*
function myFunction(){
	
var car={color:"red",model:"H1"};
	
	var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
	
	var x=typeof person.age;
	var p1=document.getElementById('p1');
	p1.innerHTML=x;
	
	var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};*/


function numberKey(elem){
	
var result=elem.innerHTML;
result=result.trim();
var display=document.getElementById('result');
display.innerHTML+=result;
	  
}

function clearScreen(){
	
	document.getElementById('result').innerHTML="";
	
}
function deleteKey(){
	
	var result=document.getElementById('result').innerHTML;
	var lengthOfResult=result.length;
	if(lengthOfResult==0){}else{// 1234
		result=result.substr(0,lengthOfResult-1);
		document.getElementById('result').innerHTML=result;
	}
	
}
var endResultGlobal;
function calculate(){
	
	var result=document.getElementById('result');
	var resultText=result.innerHTML;
	// evaulation function eval ()
    var endResult=eval(resultText);
    result.innerHTML =resultText+' = '+ endResult;	
	 
	
}
function memory(){
	var result=document.getElementById("result");
	var resultText=result.innerHTML;
	var array=resultText.split("=");
	var endResult=array[1];
	endResultGlobal=endResult;
	
}
function memoryReturn(){
		var result=document.getElementById("result");
	var resultText=result.innerHTML;
	result.innerHTML=resultText+endResultGlobal;
	
	
}





	 