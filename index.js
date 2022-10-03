//document.getElementById(count).innerHTML = 5

//let count = 5
//count = count + 1
//console.log(count)

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;



function increment() {
    count += 1
    countEl.innerHTML = count
    console.log(count)
}
function save() {
   let countStr = count + " - "
   saveEl.innerHTML  += countStr;
   countEl.innerHTML = 0;
   count = 0; 
}

let firstName = "Emmanuel";
let lastName = "Eze";
let fullName = firstName + "" + lastName;
console.log(fullName);
