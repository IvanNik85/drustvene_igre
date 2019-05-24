$(document).ready(function() {

    $('.one').click(function() {  
        dificultyLevel(8);          
        $('.wrapper').show();
        $('.main').hide();           
    });

    $('.two').click(function() {  
        dificultyLevel(12);        
        $('.memoryGame .card').css({
            width: 'calc(20% - 6px)',
            height: 'calc(20% - 6px)'
        });
        $('.wrapper').show();
        $('.main').hide();           
    });

    $('.three').click(function() {
            dificultyLevel(18); 
                 
        $('.memoryGame .card').css({
            width: 'calc(16.666% - 6px)',
            height: 'calc(16.666% - 6px)'
        })        
        $('.wrapper').show();
        $('.main').hide();           
    });


    function dificultyLevel(num) {
        $('.memoryGame').empty();
        for(i = 0; i < 2; i++) {
            for(j = 1; j <= num; j++) {                             
                $('.memoryGame').append(`<div class="card" data-name="dragon${j}">
                <img class="front" src="images/dragon${j}.jpg" alt="dragon${j}">
                <img class="back" src="images/card6.png" alt="cardBack"> 
                </div>`);
            }            
        } 
        if(num == 12 && j < 14) {   
            console.log(`yes`)                
            $('.memoryGame').append(`<div class="card1"<img src="images/dragon25.jpg" alt="neutral"></div>`)
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

    (function shufle() {
        $('.card').each(function() {
            $(this).css({
                'order': Math.floor(Math.random() * 16)
            });
        });
    })();
    
    $('#newGame').click(function(){ 
        location.reload();        
    })    

    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.strokeStyle = '#fad232';
    ctx.lineWidth = 2.5;
    $('.difficulty').click(function(){ 
        animate(); 
    })      
    $('.btnDiv').hide();
        let x = 0;    
        let y = 200;   
        let z = 200;
        let q = 70;
        function animate() {
            requestAnimationFrame(animate);                         
            if(x <= 70) {                
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
        
        $('#options').click(function() {
            $('.main').show();
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
    


    