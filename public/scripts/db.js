const fuckery = [];
const lines = [];
const checkmarks = [];
let q=0;
let p=0;
let k=0;

const DBdisplay = document.getElementById('DB_display');
const deleteButton = document.getElementById('delbutton');

// function renderlist(objlist){
window.addEventListener("load",() => {
    fetch("/api/submissions", {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
    .then(response => response.text())
    .then(data => {
      console.log(data); // Log the response data
      let objlist = JSON.parse(data);

	q=0;
	p=0;
	k=0;
	for(let i of objlist){
		lines.push( document.createElement("div"));
			lines[p].className = "DBline";
			lines[p].id = "line"+i["id"];
			DBdisplay.appendChild(lines[p]);
		
		fuckery.push(document.createElement("div"));
			fuckery[q].className = "DBcell";
			fuckery[q].id = "cell"+i["id"];
			lines[p].appendChild(fuckery[q]);

		
		checkmarks.push(document.createElement("input"));
			checkmarks[k].type = "checkbox";
			checkmarks[k].id=i["id"];
			fuckery[q].appendChild(checkmarks[k]);
			q++;
			k++;
		
		fuckery.push(document.createElement("div"));
			fuckery[q].className = "DBcell";
			fuckery[q].innerText = i["locationID"];
			lines[p].appendChild(fuckery[q]);
			q++;
		
		fuckery.push(document.createElement("div"));
			fuckery[q].className = "DBcell";
			fuckery[q].innerText = i["submitterID"];
			lines[p].appendChild(fuckery[q]);
			q++;
		
		fuckery.push(document.createElement("div"));
			fuckery[q].className = "DBcell";
			fuckery[q].innerText = i["mainCategory"];
			lines[p].appendChild(fuckery[q]);
			q++;
			
		fuckery.push(document.createElement("div"));
			fuckery[q].className = "DBcell";
			fuckery[q].innerText = i["subCategory"];
			lines[p].appendChild(fuckery[q]);
			q++;
			
		fuckery.push(document.createElement("div"));
			fuckery[q].className = "DBcell";
			fuckery[q].innerText = i["comments"];
			lines[p].appendChild(fuckery[q]);
			q++;
			
		fuckery.push(document.createElement("div"));
			fuckery[q].className = "DBcell";
			fuckery[q].innerText = new Date(i["date"]).toLocaleString();
			lines[p].appendChild(fuckery[q]);
			q++;
		
		p++;
    }
		
	}).catch(error => {
      console.error('Error:', error);
    });
})

let temp;

deleteButton.addEventListener("click", () => {
	let spliceables=[];
	for (let i = 0; i < checkmarks.length; i++) {
		console.log(checkmarks[i].id);
		if (checkmarks[i].checked == true) {
            // console.log(checkmarks[i]);
			document.getElementById("line"+checkmarks[i].id).remove();
			//temp = checkmarks.splice(i, 1);
			spliceables.push(i);
		}
	}
	for (k of spliceables) {
		temp = checkmarks.splice(k, 1);
        // console.log(temp);
	}
})