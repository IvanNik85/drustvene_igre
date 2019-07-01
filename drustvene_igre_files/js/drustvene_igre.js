var vesala = document.getElementById('vesala');
var generated = document.querySelector('.generated');
var link = document.createElement('a');
var link1 = document.createElement('a');
link.setAttribute('href', 'vesala/Igra_vesala.html');
link1.setAttribute('href', 'vesala/Igra_vesala_hard.html');
var btnOne = document.createElement('button');
btnOne.setAttribute('id', 'easy');
btnOne.innerHTML = 'Lakše';
var btnTwo = document.createElement('button');
btnTwo.setAttribute('id', 'hard');
btnTwo.innerHTML = 'Teže';

vesala.addEventListener('mouseenter', generate);
vesala.addEventListener('mouseleave', remove);

function generate() {

    setTimeout(() => {

        btnOne.className = '';
        btnTwo.className = '';
        generated.appendChild(link);
        link.appendChild(btnOne);
        generated.appendChild(link1);
        link1.appendChild(btnTwo);
    }, 130);
};
function remove() {
    setTimeout(() => {
        btnOne.className = 'hidden';
        btnTwo.className = 'hidden';
    }, 3000);
};

let ds = document.querySelectorAll('.games')

$(document).ready(function () {
    let locked;

    let ids = ['#vesala', '#skocko', '#dragon'];
    let iconClass = ['dizzy', 'star-half-alt', 'dragon'];
    let divs = ['#divOne', '#divTwo', '#divThree'];
    let names = ['Vešala', 'Skočko', 'Dragon memory'];

    for (let i = 0; i < 3; i++) {
        if(locked) return;
        $(ids[i]).mouseenter(function () {
            $(this).html(`<i class="fas fa-${iconClass[i]}">`).addClass('hovered');
        })
        $(divs[i]).mouseleave(function () {
            locked = true;
            setTimeout(function () {
                $(ids[i]).html(names[i]);
                locked = false;
            }, 1500)
            setTimeout(function () {
                $(ids[i]).removeClass('hovered');
            }, 1000);
        })
    }
})