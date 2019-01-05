
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
        insideRow1.setAttribute('class', 'neutral');                 
        insideRow.appendChild(insideRow1);
    }
}
for (i = 0; i < 4; i++) {  
    let finalSol = document.querySelector('.three'); 
    let v = Math.floor(Math.random() * 6); 
    finalSol.className = 'pos' + v;
    finalArr.push('pos' + v); 
    finalSol.style.visibility = 'hidden';
}
console.log(finalArr)
resetBtn.addEventListener('click', resetGame);
function resetGame() {
    location.reload();
}

let id;
let timerActivate = document.getElementById('tajmerBtn');
let timerActivate2 = document.querySelectorAll('.rowClick div');
timerActivate.addEventListener('click', tajmer);
for(i=0; i<6; i++){
    timerActivate2[i].addEventListener('click', tajmer);
}
function tajmer() {
    timerActivate.removeEventListener('click', tajmer);
    for(i=0; i<6; i++){
        timerActivate2[i].removeEventListener('click', tajmer);
    }
    let ani = document.getElementById('animate');
    let pos = 0;
    id = setInterval(countdown, 220);
    function countdown() {
        if (pos == 400) {
            clearInterval(id);
            alert(`Vreme Vam je isteklo! \nIgra je gotova!`); 
            for(i = 0; i < 4; i++) {
                document.querySelectorAll('.wrap div')[i].style.visibility = "initial";
                document.querySelectorAll('.wrap div')[i].style.border = "none";
            }           
        } else {
            pos++; 
            ani.style.top = pos + "px";
        }
    }
}

function vrednost() {      
    document.querySelectorAll('.row .one')[0].className = this.className;
      
    let row1 = document.querySelectorAll(".neutral"); 
    
    testArr.push(this.className);           
   
    nekiNiz = [];
    let klonResenja = finalArr.slice(0);

    if(testArr.length === 4) { 
        for(i = 0; i < 4; i++) {
            if(testArr[i] == finalArr[i]){
                nekiNiz.unshift('true');            
                klonResenja[i] = '';
                testArr[i] = '';
            } 
        }
        for(i = 0; i < testArr.length; i++) {
            for(j = 0; j < klonResenja.length; j++) {
                if(testArr[i] == klonResenja[j] && testArr[i] != '') {
                    nekiNiz.push('maybe'); 
                    klonResenja[j] = ''; 
                    testArr[i] = '';               
                } 
            }
        }  
        for(i = 0; i < testArr.length; i++) {
            if(testArr[i] != finalArr[i]){
                nekiNiz.push('false');        
            }
        }        
        for(i = 0; i < 4; i++) { 
            row1[i].className = nekiNiz[i];            
            testArr = [];            
        }  
        var nol =  nekiNiz.slice(0, 4);
        console.log(nol);        
        if(nol.every(svaki => svaki === 'true')){  
            for(i in nol) {              
            document.querySelectorAll('.wrap div')[i].style.visibility = "initial";
            }
            clearInterval(id);
            alert(`Čestitamo, našli ste konačno rešenje!`); 
        }
    }  
}


