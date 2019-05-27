$(document).ready(function() {
    let cardStyle;
    let dificulty;
    for(let i = 0; i < 12; i++) {
        $('.modal-content').prepend(`<img src="./images/card${i}.png" alt="card${i}" id="card${i}" data-dismiss="modal">`);       
    } 

    let cardsB = document.querySelectorAll('.modal-content img');
    cardsB.forEach(card => card.addEventListener('click', changeBack));
    function changeBack() {
       cardStyle = this.id;              
    }

    $('.one').click(function() {  
        dificulty = 8;
        hide(this);          
    });

    $('.two').click(function() {  
        dificulty = 12;
        hide(this);       
    });

    $('.three').click(function() {
        dificulty = 18;
        hide(this);    
    }); 
    
    function hide(par) {
        $('#myCanvas').hide();
        par.parentElement.style.visibility = 'hidden' 
    }

    $('.start').click(function() {        
        if(dificulty == 8) {
            dificultyLevel(8, cardStyle || 'card1');           
        } else if(dificulty == 12) {
            dificultyLevel(12, cardStyle || 'card1');
            $('.memoryGame .card').css({
                width: 'calc(20% - 6px)',
                height: 'calc(20% - 6px)'
            });           
        } else if(dificulty == 18){
            dificultyLevel(18, cardStyle || 'card1');
            $('.memoryGame .card').css({
                width: 'calc(16.666% - 6px)',
                height: 'calc(16.666% - 6px)'
            })     
        } else if(cardStyle) {
            dificultyLevel(8, cardStyle);
        } else {
            dificultyLevel(8, 'card1');
        }
        $('.wrapper').show();
        $('.mainMenu').hide();   
    });

    function dificultyLevel(num, back) {
        $('.memoryGame').empty();
        for(i = 0; i < 2; i++) {
            for(j = 1; j <= num; j++) {                             
                $('.memoryGame').append(`<div class="card" data-name="dragon${j}">
                <img class="front" src="images/dragon${j}.jpg" alt="dragon${j}">
                <img class="back" src="images/${back}.png" alt="cardBack"> 
                </div>`);
            }            
        }  

        (function shufle() {
            $('.card').each(function() {
                $(this).css({
                    'order': Math.floor(Math.random() * 16)
                });
            });
        })(); 

        if(num == 12 && j < 14) { 
            $('.memoryGame').append(`<div class="card1"<img src="images/dragon25.jpg" alt="neutral"></div>`);
            $('.card1').css('order', 16);
        }  
 
        let cards = document.querySelectorAll('.card');
        cards.forEach(card => card.addEventListener('click', flip));

        let hasFlipped = false;
        let firstCard, secondCard;
        let lockBoard = false;
        let count = 0;

        function flip() {       
            if(lockBoard) return;
            if(this == firstCard) return;
            this.classList.add('flip');    
            if(!hasFlipped) {       
                hasFlipped = true;      
                firstCard = this;
            } else {        
                hasFlipped = false;   
                secondCard = this;                    
                $('#num').text(++count);  
                if(firstCard.dataset.name == secondCard.dataset.name) {
                    firstCard.removeEventListener('click', flip);
                    secondCard.removeEventListener('click', flip);
                } else {       
                    lockBoard = true;      
                    setTimeout(function() {
                        firstCard.classList.remove('flip');
                        secondCard.classList.remove('flip');
                        lockBoard = false;
                        firstCard = null;
                    }, 1000);              
                }             
            }        
        }   
    }  
    
    $('#newGame').click(function(){ 
        location.reload();        
    })    

    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");    
    ctx.strokeStyle = '#fad232';
    ctx.lineWidth = 2.5;
    let called = false;
    $('.difficulty').click(function(){ 
        $('.btnDiv').css('visibility', 'hidden');         
        if(called) {            
            reset(); 
            setTimeout(function() {
                $('.btnDiv').css('visibility', 'visible'); 
            },1000)
                                 
        } else {
            animate();
            $('.btnDiv').css('visibility', 'visible'); 
            called = true;             
        }  
       
    })      
    $('.btnDiv').css('display', 'none');
        let x = 0;    
        let y = 200;   
        let z = 200;
        let q = 70; 
        function animate() {
           window.requestAnimationFrame(animate); 
            if(x <= 70) { 
                ctx.beginPath();               
                ctx.moveTo(200,0);
                ctx.lineTo(200,x);   
                x += 5;  
            } else if(y < 350 && z > 50) {
                y += 5;  
                z -= 5;  
                ctx.moveTo(200,70);
                ctx.lineTo(y,70);               
                ctx.lineTo(z,70); 
            } else if(q <= 140){                                                
                ctx.moveTo(50,70);
                ctx.lineTo(50,q);
                ctx.moveTo(200,70);
                ctx.lineTo(200,q);
                ctx.moveTo(350,70);
                ctx.lineTo(350,q);   
                q += 5;                
            } else {                
                $('.btnDiv').fadeIn();
            }    
            ctx.stroke();             
        }         

        function reset() {   
            $('#myCanvas').show();                   
            ctx.clearRect(0, 0, 400, 140);                      
            x = 0;    
            y = 200;   
            z = 200;
            q = 70;
        }
        
        $('#options').click(function() { 
            $('.mainMenu').show();
            $('.wrapper').hide();           
        });
    // let c = document.getElementById("myCanvas");
    // let ctx = c.getContext("2d");
    // ctx.moveTo(200,0);
    // ctx.lineTo(200,70);
    // ctx.moveTo(200,70);
    // ctx.lineTo(350,70);
    // ctx.moveTo(200,70);
    // ctx.lineTo(50,70);
    // ctx.moveTo(50,70);
    // ctx.lineTo(50,140);
    // ctx.moveTo(200,70);
    // ctx.lineTo(200,140);
    // ctx.moveTo(350,70);
    // ctx.lineTo(350,140);
    // ctx.stroke();
});
    


    