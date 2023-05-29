const problemType = document.getElementById('problem_type');
const gCat = document.getElementById('general_category');
const sCat = document.getElementById('specialized_problem');  //:3
const specProblem = document.getElementById('spec');
const radLabel = document.getElementById('radio_label');
const otherInput = document.getElementById('oth_inp');
const cBox = document.getElementById('comment_box');
const check = document.getElementById('TaC');
const checkbox = document.getElementById('myCheckbox');

const next = document.getElementById('front');
const prev = document.getElementById('back');
const finish = document.getElementById('finish');

const eOpt = document.getElementById('eOption');
const pOpt = document.getElementById('pOption');
const sOpt = document.getElementById('sOption');
const plOpt = document.getElementById('plOption');


//μαγαζιά, ανελκυστήρες, σκάλες, atm, wc, διάδρομοι
const elProb = [["Φωτισμός","Κλιματισμός","Διακόσμηση","Άλλο"],
				["Φωτισμός","Κλήση ανελκυστήρα","Ανάβαση/Κατάβαση","Λειτουργία κομβίων","Λειτουργία θυρών","Άλλο"],
				["Ανάβαση/Κατάβαση","Φωτεινές σημάνσεις","Άλλο"],
				["Προβολή οθόνης","Λειτουργία πλήκτρων","Λειτουργία αφής","Εισαγωγή/Εξαγωγή κάρτας","Άλλο"],
				["Φωτισμός","Στεγνωντήριο χεριών","Δοχείο χαρτιού","Άλλο"],
				["Φωτισμός","Άλλο"]];
const plumProb = [["Προβλήμα βεστιαρίου","Τυχαία συσσώρευση νερού στον χώρο","Διακοπή παροχής","Άλλο"],
				  [],[],[],
				  ["Διαρροή λεκάνης", "Διαρροή στομίου βρύσης", "Τυχαία συσσώρευση νερού στον χώρο", "Διακοπή παροχής", "Αποχέτευση","Άλλο"],
				  ["Τυχαία συσσώρευση νερού στον χώρο","Άλλο"]];
const arcProb = [["Ρωγμές στην κατασκευή","Καθιζήσεις δαπέδου","Καθιζήσεις οροφής","Γύμνωση σωληνώσεων/καλωδίων","Άλλο"],
				 ["Αφύσικη κλίση θαλάμου","Ευθυγράμμιση θυρών","Κλονισμός θαλάμου","Ζημιές σε τοιχώματα θαλάμου","Άλλο"],
				 ["Ζημιές σε σκαλοπάτια", "Φθορές ιμάντα υποβραχιονίου", "Άλλο"],
				 ["Υλικές φθορές οθόνης","Φθορές επί των πλήκτρων","Άλλο"],
				 ["Ρωγμές στην κατασκευή","Καθιζήσεις δαπέδου","Καθιζήσεις οροφής","Γύμνωση σωληνώσεων/καλωδίων","Άλλο"],
				 ["Ρωγμές στην κατασκευή","Καθιζήσεις δαπέδου","Καθιζήσεις οροφής","Γύμνωση σωληνώσεων/καλωδίων","Άλλο"]];

const currentUrl = window.location.href;
const indexOfEqualSign = currentUrl.indexOf("=");
const pgTypeGlobal = parseInt(currentUrl.substring(indexOfEqualSign + 1));

switch(pgTypeGlobal){

	case(1):
		pOpt.hidden = true;
		break;
	case(2):
		pOpt.hidden = true;
		break;
	case(3):
		pOpt.hidden = true;
		break;
	default:
		pOpt.hidden = false;
		sOpt.hidden = false;
		eOpt.hidden = false;
		break;
	}


next.style.cursor = "not-allowed";

problemType.addEventListener('click', () => {
	plOpt.hidden = true;
})

window.addEventListener('load', () => {
	cBox.value = '';
	next.hidden = false;
	prev.hidden = true;
	finish.hidden = true;
	gCat.hidden = false;
	sCat.hidden = false;
	cBox.hidden = true;
	check.hidden = true;
	form_body = document.querySelector("body");
	form_body.style.display = "flex";
	form_body.style.justifyContent = "center";
	form_body.style.alignContent = "center";
})

problemType.addEventListener('change', () => {
	otherInput.hidden = true;
	specProblem.innerHTML="";
	next.style.cursor = 'not-allowed';
	next.setAttribute("disabled", "disabled");

  switch (problemType.value) {
    case 'electronics':
		specProblem.hidden=false;
		radLabel.hidden=false;
		cBox.hidden = true;
		
		for (i of elProb[pgTypeGlobal]){
			
			const t = document.createElement("div");
			t.className = "ante";
			t.id = "cont"+i;
			specProblem.appendChild(t);
			
			const q = document.createElement("input");
			q.setAttribute('type', 'radio');
			q.className = "radio";
			q.name = "radio";
			q.id = ""+i;
			q.value = ""+i;
			q.addEventListener('click', () => {
				next.removeAttribute("disabled");
				next.style.cursor = "pointer";
				if (q.value == "Άλλο"){
					otherInput.hidden = false;
				}
				else{
					otherInput.hidden = true;
				}
			});
			t.appendChild(q);
			
			const p = document.createElement("label");
			p.setAttribute('for', q.id);
			p.innerText = i;
			p.className = "radio";
			p.id = "label"+i;
			t.appendChild(p);
			p.style.margin = 0 + 'px';
		}
      break;
	  
    case 'plumbing':
		specProblem.hidden=false;
		radLabel.hidden=false;
		cBox.hidden = true;
		
		for (i of plumProb[pgTypeGlobal]){
			
			const t = document.createElement("div");
			t.className = "ante";
			t.id = "cont"+i;
			specProblem.appendChild(t);
			
			const q = document.createElement("input");
			q.setAttribute('type', 'radio');
			q.className = "radio";
			q.name = "radio";
			q.id = ""+i;
			q.value = ""+i;
			q.addEventListener('click', () => {
				next.removeAttribute("disabled");
				next.style.cursor = "pointer";
				if (q.value == "Άλλο"){
					otherInput.hidden = false;
				}
				else{
					otherInput.hidden = true;
				}
			});
			t.appendChild(q);
			
			const p = document.createElement("label");
			p.setAttribute('for', q.id);
			p.innerText = i;
			p.className = "radio";
			p.id = "label"+i;
			t.appendChild(p);
			p.style.margin = 0 + 'px';
		}
      break;
	  
    case 'structural':
		specProblem.hidden=false;
		radLabel.hidden=false;
		cBox.hidden = true;
		
		for (i of arcProb[pgTypeGlobal]){
				
			const t = document.createElement("div");
			t.className = "ante";
			t.id = "cont"+i;
			specProblem.appendChild(t);
			
			const q = document.createElement("input");
			q.setAttribute('type', 'radio');
			q.className = "radio";
			q.name = "radio";
			q.id = ""+i;
			q.value = ""+i;
			q.addEventListener('click', () => {
				next.removeAttribute("disabled");
				next.style.cursor = "pointer";
				if (q.value == "Άλλο"){
					otherInput.hidden = false;
				}
				else{
					otherInput.hidden = true;
				}
			});
			t.appendChild(q);
			
			const p = document.createElement("label");
			p.setAttribute('for', q.id);
			p.innerText = i;
			p.className = "radio";
			p.id = "label"+i;
			t.appendChild(p);
			p.style.margin = 0 + 'px';
		}
      break;
	  
	case 'other':
		radLabel.hidden = true;
		cBox.hidden = false;
		cBox.placeholder = "Παρακαλώ εξηγήστε μας το πρόβλημά σας."
		next.removeAttribute("disabled");
		next.style.cursor = "pointer";
		break;
		
		
    default:
      break;
  }
  
});

prev.addEventListener('click', () => {
	next.hidden = false;
	prev.hidden = true;
	finish.hidden = true;
	gCat.hidden = false;
	sCat.hidden = false;
	cBox.hidden = true;
	check.hidden = true;
})

next.addEventListener('click', () => {
	next.hidden = true;
	prev.hidden = false;
	finish.hidden = false;
	gCat.hidden = true;
	sCat.hidden = true;
	cBox.hidden = false;
	check.hidden = false;
})

// =============== Submit ===============
finish.addEventListener('click', () => {
	if (!checkbox.checked){
		// alert('Θα πρέπει να αποδεχτείτε τους όρους και προϋποθέσεις πρωτού συνεχίσετε στην υποβολή')
		Swal.fire(
			'Σφάλμα',
			'Θα πρέπει να αποδεχτείτε τους όρους και προϋποθέσεις πρωτού συνεχίσετε στην υποβολή',
			'error'
		)
	}
	else{
		let specifics;
		if (problemType.value === "other"){
			specifics = "";
		}
		else {
			specifics = document.querySelector('input[name="radio"]:checked').value;
			if (specifics === "Άλλο"){
				specifics = otherInput.value;
			}
		}
		const submit = {
			type : problemType.value,
			specifics: specifics,
			comment: cBox.value,
			date: new Date()
		};

		console.log(submit);

		fetch('/form', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(submit)
		  })
			.then(response => {
				if (response.ok) window.location.href = response.url;
			})
			.catch(error => {
			  console.error('Error:', error);
		});
		Swal.fire(
			'Επιτυχία',
			'Η αίτησή σας υποβλήθηκε, ευχαριστούμε',
			'success'
		)
	}
})