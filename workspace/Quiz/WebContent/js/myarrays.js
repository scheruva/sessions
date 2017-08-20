// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections
function jsTest(idToWrite){
	var myarrays = ['one', 'two', 'three'];
	var newText = "Length of array = "+myarrays.length;
	
	// add an item to the list
	myarrays[3] = "four";
	
	for (var i=0; i<myarrays.length; i++){
		newText = newText + "<br/>" + "Item "+i+" = "+myarrays[i];
	}
	
	// write to page
	var myDiv = document.getElementById(idToWrite);
	var prevText = myDiv.innerHTML;
	myDiv.innerHTML = prevText+"<br/>"+newText;
}

function resetDiv(idToReset){
	var myDiv = document.getElementById(idToReset);
	myDiv.innerHTML = "";
}
