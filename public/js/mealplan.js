
var turkeycount = Number(localStorage.getItem("turkeycount")) || 4;
var roastcount = Number(localStorage.getItem("roastcount")) || 8;
var buttercount = Number(localStorage.getItem("buttercount")) || 8;
var enchicount = Number(localStorage.getItem("enchicount")) || 10;
var shrimpcount = Number(localStorage.getItem("shrimpcount")) || 4;
var couscount = Number(localStorage.getItem("couscount")) || 0;

//if completed button is toggled, set localstorage varable of the recipe to be true. 
function mealplan(checkboxElem){
	var id= String(ele.id);
	
	if(checkboxElem.checked){
		localStorage.setItem(id,'true');
	}
	else{
		localStorage.setItem(id,'false')
	}
}

//on load, go through mealplans and hide them if they're not true 
//make sure the id of the mealplan is just the name of the recipe 
function mealhide(){
	var id=ele.id;
	var meal= String(id+'check');
	var check = localStorage.getItem(meal);
	if(check==="false"){
		id.style.display="none";
	}
}

//for the x button 
function delete(){
	var id=ele.id;
	if (confirm('Do you want to close the application ?')){
		id.style.display="none";	
	} 	
}