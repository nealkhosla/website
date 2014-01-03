function showClass(class_id) {
	var elem_id = class_id + "_info";
	var elements = document.getElementsByClassName("course");
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		if (element.id == elem_id){
			element.style.display = "block";
		}
		else {
			element.style.display = "none";
		}
	}
} 





