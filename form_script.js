const problemType = document.getElementById('problem_type');
const specProblem = document.getElementById('gmtx');

const elProb = ["Φωτισμός","Κλιματισμός","Διακόσμηση"];
const plumProb = ["Σουλήνες","Σωλήνες","Σλήν'ς","Σωλήν ο μείζων","Σωλήν ο ελάσσων"];
const arcProb = ["Γκρεμίζεται","το μαγαζί","κι εμείς","γελάμε","σαν χαζοί"];

problemType.addEventListener('change', () => {
	specProblem.innerHTML="";

  switch (problemType.value) {
    case 'electronics':
		for (i of elProb){
			const q = document.createElement("input");
			q.setAttribute('type', 'radio');
			q.className = "radio";
			q.name = "radio";
			q.id = ""+i;
			specProblem.appendChild(q);
			
			const p = document.createElement("label");
			p.setAttribute('for', q.id);
			p.innerText = i;
			p.className = "radio";
			p.id = ""+i;
			specProblem.appendChild(p);
			p.style.margin = 0 + 'px';
		}
      break;
    case 'plumbing':
		for (i of plumProb){
			const q = document.createElement("input");
			q.setAttribute('type', 'radio');
			q.className = "radio";
			q.name = "radio";
			q.id = ""+i;
			specProblem.appendChild(q);
			
			const p = document.createElement("label");
			p.setAttribute('for', q.id);
			p.innerText = i;
			p.className = "radio";
			p.id = ""+i;
			specProblem.appendChild(p);
			p.style.margin = 0 + 'px';
		}
      break;
    case 'structural':
		for (i of arcProb){
			const q = document.createElement("input");
			q.setAttribute('type', 'radio');
			q.className = "radio";
			q.name = "radio";
			q.id = ""+i;
			specProblem.appendChild(q);
			
			const p = document.createElement("label");
			p.setAttribute('for', q.id);
			p.innerText = i;
			p.className = "radio";
			p.id = ""+i;
			specProblem.appendChild(p);
			p.style.margin = 0 + 'px';
		}
      break;
    default:
      break;
  }
});