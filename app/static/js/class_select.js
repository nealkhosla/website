function showSubject() {
	var selopt = document.getElementById("subject").value;
	var elements = document.getElementsByClassName("class_menu");
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i]; 
		if (element.id == selopt) {
			element.style.display = "block";
		}
		else {
			element.style.display = "none";
		}
	}		
}

function parseCS() {
	var selopt = document.getElementById("cs_opts").value;
	showClass(selopt);
}

function parseMath() {
	var selopt = document.getElementById("math_opts").value;
	showClass(selopt);
}

function parseMSE() {
	var selopt = document.getElementById("mse_opts").value;
	showClass(selopt);
}

function parseStats() {
	var selopt = document.getElementById("stats_opts").value;
	showClass(selopt);
}

function showClass(class_id) {
	var selopt = document.getElementById(class_id);
	var elements = document.getElementsByClassName("course");
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		if (element.id == selopt.id){
			element.style.display = "block";
		}
		else {
			element.style.display = "none";
		}
	}
} 
