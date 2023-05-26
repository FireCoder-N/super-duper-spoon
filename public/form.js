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
//const other = document.getElementById('Άλλο');

const elProb = [["Φωτισμός","Κλιματισμός","Διακόσμηση","Άλλο"],["a","b","c","Άλλο"],["a","b","c","Άλλο"],[]];
const plumProb = [["Σουλήνες","Σωλήνες","Σλήν'ς","Σωλήν ο μείζων","Σωλήν ο ελάσσων","Άλλο"],[],["a","b","c","Άλλο"],["a","b","c","Άλλο"]];
const arcProb = [["Γκρεμίζεται","το μαγαζί","κι εμείς","γελάμε","σαν χαζοί","Άλλο"],["a","b","c","Άλλο"],[],[]];

let pgTypeGlobal = 0;


switch(pgTypeGlobal){
	case(1):
		pOpt.hidden = true;
		break;
	case(2):
		sOpt.hidden = true;
		break;
	case(3):
		eOpt.hidden = true;
		sOpt.hidden = true;
	}


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
				next.removeEventListener("mouseover", hover);
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
				next.removeEventListener("mouseover", hover);
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
				next.removeEventListener("mouseover", hover);
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
		break;
		
		
    default:
      break;
  }
  
	// let other = document.getElementById('Άλλο');
	// other.addEventListener('click',() => {
	// otherInput.hidden = false;
	// })
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

next.addEventListener('mouseover', hover);

function hover(event){
	event.target.style.cursor = "not-allowed";
}

// checkbox.addEventListener('change', () => {
// 	if (this.checked){
// 		console.log("yes")
// 	}
// 	else{
// 		console.log('no')
// 	}
// });

// =============== Submit ===============
finish.addEventListener('click', () => {
	if (!checkbox.checked){
		alert('Θα πρέπει να αποδεχτείτε τους όρους και προϋποθέσεις πρωτού συνεχίσετε στην υποβολή')
	}
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
})