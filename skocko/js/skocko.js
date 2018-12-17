
let resetBtn = document.getElementById('new');
let onePos = document.querySelector('.pos0');
let twoPos = document.querySelector('.pos1');
let threePos = document.querySelector('.pos2');
let fourPos = document.querySelector('.pos3');
let fivePos = document.querySelector('.pos4');
let sixPos = document.querySelector('.pos5');

let one = document.querySelector('.one');
let two = document.querySelector('.two');
let divOne = document.querySelector('.div_one');
let divTwo = document.querySelector('.div_two');
let uspeh = 0;
let finalArr = [];
let testArr = [];

onePos.addEventListener('click', vrednost);
twoPos.addEventListener('click', vrednost);
threePos.addEventListener('click', vrednost);
fourPos.addEventListener('click', vrednost);
fivePos.addEventListener('click', vrednost);
sixPos.addEventListener('click', vrednost);

for(i = 1; i <= 6; i++) {
    let row = document.createElement('div');
    row.setAttribute('class', 'row');
    row.setAttribute('id', 'row' + i);
    divOne.appendChild(row);   
    for(j = 0; j < 4; j++) {  
        let insideRow = document.createElement('div');
        insideRow.setAttribute('class', 'one');    
        row.appendChild(insideRow);
    }
}
for(i = 1; i <= 6; i++) {
    let row = document.createElement('div');
    row.setAttribute('class', 'row');
    divTwo.appendChild(row);   
    for(j = 0; j < 4; j++) {  
        let insideRow = document.createElement('div');
        insideRow.setAttribute('class', 'two');        
        row.appendChild(insideRow);
        let insideRow1 = document.createElement('div');
        insideRow1.setAttribute('class', 'true');        
        insideRow.appendChild(insideRow1);
    }
}
//var show = function() {
    for (i = 0; i < 4; i++) {  
        let finalSol = document.querySelector('.three'); 
        let v = Math.floor(Math.random() * 6); 
        finalSol.className = 'pos' + v;
        finalArr.push('pos' + v);
        console.log(finalArr);
    }
//}

resetBtn.addEventListener('click', resetGame);
function resetGame() {
    location.reload();
}

function vrednost() {      
    document.querySelectorAll('.row .one')[0].className = this.className;
   
    var row1 = document.querySelectorAll('#row1 div');
    console.log(row1[0].className);    
    console.log(finalArr);

    for(i = 0; i < 4; i++) { 
       testArr.push(row1[i].className);
       console.log(testArr)       
       break;
      ;   
       
        }
        
    
}
