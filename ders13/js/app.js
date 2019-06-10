function saveTask(){
 var inputElement=document.getElementById("task");
 var text=inputElement.value;
 var text1=document.createTextNode(text);
 var p1=document.createElement("li");
 p1.appendChild(text1);
 var parent=document.getElementById("tasks");
 parent.appendChild(p1);
 }
 
 function saveHuman(){
 var nameElement=document.getElementById("name");
 var name=nameElement.value;
 
 var salaryElement=document.getElementById("salary");
 var salary=salaryElement.value;
 var tr=document.createElement("tr");
 var td1=document.createElement("td");
 td1.innerHTML=name;
 
 var td2=document.createElement("td");
 td2.innerHTML=salary;
 tr.appendChild(td1);
 tr.appendChild(td2);
 var parent=document.getElementById("humans");
 parent.appendChild(tr);
 }
 
 function saveFood(){
	 
	 var name=document.getElementById('name').value;
	 var price=document.getElementById('price').value;
	 var file=document.getElementById('file').value;
	 
	 alert(file);
	 
	 
 }
 
 
 
 