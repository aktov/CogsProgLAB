



//if completed button is toggled, set localstorage varable of the recipe to be true. 
function mealplan(checkbox){
	var id=checkbox.id;
	if(checkbox.checked){
		localStorage.setItem(id,'true');
	}
	else{
		localStorage.setItem(id,'false')
	}
	console.log(localStorage.getItem(id));
}



//on load, go through mealplans and hide them if they're not true, and add numbers to localhost 
//make sure the id of the mealplan is just the name of the recipe 
//ok so mealhide isn't running w hen the page loads. 
function mealhide(){
	var divsToHide = document.getElementsByClassName("cooked"); //divsToHide is an array
    for(var i = 0; i < divsToHide.length; i++){

    	var id=String(divsToHide[i].id);
    	var idcount=id+'count';
    	localStorage.getItem(idcount);

    	//if there is no value, set to max amount 
    	if(localStorage.getItem(idcount) == null){
    			
    			if(id==='turkey'){
    				basevalue=4;
    				//break;
    			}
    			else if(id==='shrimp'){
    				basevalue=4;
    				//break;
    			}
    			else if(id==='cous'){
    				basevalue=8;
    				//break;
    			}
    			else if(id==='enchi'){
    				basevalue=10;
    				//break;
    			}
    			else if(id==='roasted'){
    				basevalue=8;
    				//break;
    			}
    			else{
    				basevalue=8;
    			}
    		localStorage.setItem(idcount, basevalue);
    		document.getElementById(id+'countout').innerHTML= localStorage.getItem(idcount);
		}


    	
    	
    	//make block vanish if not toggled
    	localStorage.setItem('shrimpcheck','true'); 
    	var meal= String(id+'check');
		var check = localStorage.getItem(meal);
		console.log(meal + "-" + check);

			if(check==="true"){
	        	divsToHide[i].style.display = "block"; // or		
			}else{
				divsToHide[i].style.display = "none";	
			}
    }
}

//sets numbers 
function setcount(){
	document.getElementById('turkeycountout').innerHTML= localStorage.getItem('turkeycount');
	document.getElementById('shrimpcountout').innerHTML= localStorage.getItem('shrimpcount');
	document.getElementById('couscountout').innerHTML= localStorage.getItem('couscount');
	document.getElementById('roastedcountout').innerHTML= localStorage.getItem('roastedcount');
	document.getElementById('buttercountout').innerHTML= localStorage.getItem('buttercount');
	document.getElementById('enchicountout').innerHTML= localStorage.getItem('enchicount');
}

function atemeal(ele){
	var id=ele.id.slice(0,-3);
	var storageid=id+'count';
	var mealsleft=Number(localStorage.getItem(storageid));
	mealsleft=mealsleft-1;
	console.log(mealsleft);
	localStorage.setItem(storageid,mealsleft);
	//document.getElementById(ele.id+'countout').innerHTML=localStorage.getItem(storageid);	
}

function nvm(ele){
	var id=ele.id.slice(0,-6);
	var storageid=id+'count';
	var mealsleft=Number(localStorage.getItem(storageid));
	console.log(storageid);
	mealsleft=mealsleft+1;
	console.log(mealsleft);
	localStorage.setItem(storageid,mealsleft);
}


//for the x button 
function xbutton(ele){
	var id=ele.id;
	var mealid=ele.id.slice(0,-1);
	if (confirm('Do you want to delete this mealplan?')){
		document.getElementById(mealid).style.display="none";
		localStorage.setItem(mealid+'check','false');	
	} 	
}


//for the x button 
function xbutton2(ele){
	var id=ele.id;
	var mealid=ele.id.slice(0,-1);
	if (confirm('Do you want to delete this mealplan?')){
		ele.parentNode.style.display="none";
		localStorage.setItem(mealid+'check','false');	
	} 	
}
