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
        switch(dificulty) {
            case 8:
                dificultyLevel(8, cardStyle || 'card1'); 
                break; 
            case 12:
                dificultyLevel(12, cardStyle || 'card1');
                $('.memoryGame .card').css({
                    width: 'calc(20% - 6px)',
                    height: 'calc(20% - 6px)'
                });            
                break; 
            case 18:
                dificultyLevel(18, cardStyle || 'card1');
                $('.memoryGame .card').css({
                    width: 'calc(16.666% - 6px)',
                    height: 'calc(16.666% - 6px)'
                }) 
                break; 
            default:
                dificultyLevel(8, cardStyle || 'card1');
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
            },900)                                 
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
        let q = 40; 
        function animate() {
           window.requestAnimationFrame(animate); 
            if(x <= 40) { 
                ctx.beginPath();               
                ctx.moveTo(200,0);
                ctx.lineTo(200,x);   
                x += 5;  
            } else if(y < 350 && z > 50) {
                y += 5;  
                z -= 5;  
                ctx.moveTo(200,40);
                ctx.lineTo(y,40);               
                ctx.lineTo(z,40); 
            } else if(q <= 80){                                                
                ctx.moveTo(50,40);
                ctx.lineTo(50,q);
                ctx.moveTo(200,40);
                ctx.lineTo(200,q);
                ctx.moveTo(350,40);
                ctx.lineTo(350,q);   
                q += 5;                
            } else {                
                $('.btnDiv').fadeIn();
            }    
            ctx.stroke();             
        }    
        
        $('.timer').click(function(){ 
            animateTime();           
        });

        $('.timeBtn').css('display', 'none');
        let t = document.getElementById("myCanvasTime");
        let cont = t.getContext("2d");    
        cont.strokeStyle = '#fad232';
        cont.lineWidth = 2.5;        
        let g = 130; 
        let h = 270;  
        let j = 2*Math.PI; 
        let k = 0*Math.PI;   
        let l = 1*Math.PI;
        let i = 1*Math.PI;
        function animateTime() {
            window.requestAnimationFrame(animateTime); 
            if(g >= 60 || h <= 340) { 
                 cont.beginPath();               
                 cont.moveTo(130, 40);
                 cont.lineTo(g, 40);
                 cont.moveTo(270, 40);
                 cont.lineTo(h, 40);   
                 g -= 5; 
                 h += 5;
            } else if(j>=1.5*Math.PI || k <= 0.5*Math.PI ||
                 l<=1.5*Math.PI || i>=0.5*Math.PI) { 
                 cont.moveTo(60,40);                 
                 cont.arc(20,40,30,2*Math.PI, j, true);
                 cont.moveTo(60,40);
                 cont.arc(20,40,30,0*Math.PI, k);
                 cont.moveTo(340,40);                 
                 cont.arc(380,40,30,1*Math.PI, l);
                 cont.moveTo(340,40);
                 cont.arc(380,40,30,1*Math.PI, i, true); 
                 k += 0.075;  
                 j -= 0.075;      
                 l += 0.075;      
                 i -= 0.075;          
            } else {
                $('.timeBtn').show(); 
            }
            cont.stroke();             
         }   

        function reset() {   
            $('#myCanvas').show();                   
            ctx.clearRect(0, 0, 400, 80);                      
            x = 0;    
            y = 200;   
            z = 200;
            q = 40;
        }
        
        $('#options').click(function() { 
            $('.main').append('<button class="menuBtn backBtn"><i class="fa fa-angle-double-left"></i></button>')
            $('.mainMenu').show();
            $('.wrapper').hide(); 
            hide(document.querySelector('.one'));
            $('.backBtn').on('click', hideMenu); 
        });
        function hideMenu() {
            if(cardStyle) {
                let back = document.querySelectorAll('.back');
                back.forEach(card => card.setAttribute(`src`, `images/${cardStyle}.png`));                
            }               
            $('.mainMenu').hide();
            $('.wrapper').show(); 
        }     

       
        setInterval(timer, 1000);
        let s = 0;
        let m = 0;
        let min = '0' + m;
        let sec;
        
        function timer() {  
            s++;  
            if(s == 60) {
                s = 0
                m++;
            }  
            if(s > 9) {
                sec = s;                
            } else if(s <= 9){
                sec = '0' + s;                              
            } 
            if(m > 9) {
                min = m; 
            } else if(m <= 9) {
                min = '0' + m; 
            }
            $('.clock').text(min + ':' + sec);  
        }

});
    


    