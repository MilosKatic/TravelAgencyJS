function proveraForme(forma) {
	// provera da li su vrednosti forme ime i prezime uneseni
	var ime = forma.ime.value;
	var prezime = forma.prezime.value;

	if(forma.ime.value == ""){
		return false;
	}

	if(forma.prezime.value == ""){
		return false;
	}

	return true;
}

// Reakcija kada se klikne na checkbox
function checkboxTicked(param) {
	console.log(param);
	// dobavimo select sa stranice i u zavisnosti
	// od toga da li je checkbox selektovan ili ne
	// omogucimo, odnosno onemogucimo taj select
	var sel1 = document.getElementById("sel1");
	if (param.checked) {
		sel1.disabled = false;
	} else {
		sel1.disabled = true;
	}
	setSubmitBtnColor();
}

function setSubmitBtnColor() {
	// Prilikom promene vrednosti selecta u zadatku se trazi
	// da se promeni i boja dugmeta
	var select = document.getElementById("sel1");
	var submit = document.getElementById("submitbtn");

	// prva provera sluzi da ukoliko je select postavljen na disabled
	// boju vratimo na belu
	// u suprotnom u zavisnosti od onoga sto je selektovano
	// postavljamo odgovarajucu boju
	if (select.disabled) {
		submit.style.backgroundColor = "white";
	} else {
		if (select.value == 1) {
			submit.style.backgroundColor = "silver";
		} else if (select.value == 2) {
			submit.style.backgroundColor = "gold";
		} else {
			submit.style.backgroundColor = "skyblue";
		}
	}
}