console.log('funguju!');

let pocitadlo = 1;
let kostka = document.querySelector('.dice');

function zmenKostku(){
    if (pocitadlo < 6){
        pocitadlo += 1;

    } else {
        pocitadlo=1;
    }

    kostka.src = 'img/side'+pocitadlo+'.svg';
}

document.addEventListener('keydown', zmenKostku);