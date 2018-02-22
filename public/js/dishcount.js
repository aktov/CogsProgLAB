

function dishcount(checkboxElem){
	var count = Number(localStorage.getItem("count")) || {};
	if(checkboxElem.checked){
		count++;
	}
	else{
		count--;
	}
	localStorage.setItem("count",JSON.stringify(count));
	console.log(localStorage.getItem("count"));
}

var toLevel = (10- Number(localStorage.getItem("count")));
localStorage.setItem("toLevel", JSON.stringify(toLevel));


function dishalert(){
	alert("You've made "+ localStorage.getItem("count") + " dishes!");
}

