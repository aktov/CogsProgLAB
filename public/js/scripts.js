
var count = 0;

function dishcount(checkboxElem){
	if(checkboxElem.checked){
		count++;
	}
	else{
		count--;
	}
	console.log(count);
}

function dishalert(){
	alert("You've made "+ count + " dishes!");
}