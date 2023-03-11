let css_screenWidth1920 = '(min-width: 1920px)';
let css_screenWidth1366 = '(min-width: 1366px)';

let js_input = document.querySelector('main label input');
let js_button = document.querySelector('main button');

let js_playRadiohead = document.querySelector('main article.radiohead div.play');
let js_stopRadiohead = document.querySelector('main article.radiohead div.stop');
let js_playCigarettesAfterSex = document.querySelector('main article.cigarettesAfterSex div.play');
let js_stopCigarettesAfterSex = document.querySelector('main article.cigarettesAfterSex div.stop');
let js_playMichelleFeatherstone = document.querySelector('main article.michelleFeatherstone div.play');
let js_stopMichelleFeatherstone = document.querySelector('main article.michelleFeatherstone div.stop');
let js_siteSearch_paragraph = document.querySelector('main article.site-search p');


function playPauseSongs() {
    js_playRadiohead.addEventListener('click', function() {
        let highAndDry = new Audio('radioheadHighAndDry.mp3');
        highAndDry.play();
        js_stopRadiohead.addEventListener('click', function() {
            highAndDry.pause();
        });
    });
    js_playCigarettesAfterSex.addEventListener('click', function() {
        let sweet = new Audio('cigarettesAfterSexSweet.mp3');
        sweet.play();
        js_stopCigarettesAfterSex.addEventListener('click', function() {
            sweet.pause();
        });
    });
    js_playMichelleFeatherstone.addEventListener('click', function() {
        let iAmThereToo = new Audio('michelleFeatherstoneIAmThereToo.mp3');
        iAmThereToo.play();
        js_stopMichelleFeatherstone.addEventListener('click', function() {
            iAmThereToo.pause();
        });
    });
}


function mediaQuerySwitch() {
    document.addEventListener('DOMContentLoaded', function(e) {
        if (matchMedia(css_screenWidth1920).matches) {
            console.log('Greater than or equal to 1920!');
            console.log(innerWidth, innerHeight);

            js_button.addEventListener('click', function() {
                if (js_input.value.toLowerCase() === 'belle') {
                    alert('Scrolling down to Belle!');
                    scrollTo(0, 1953);
                }
            });
        }
        else if (matchMedia(css_screenWidth1366).matches) {
            console.log('Less than or equal to 1366!');
            console.log(innerWidth, innerHeight);

            js_button.addEventListener('click', function() {
                if (js_input.value.toLowerCase() === 'belle') {
                    alert('Scrolling down to Belle!');
                    scrollTo(0, 3294);
                }
            });
        }
    });
}


playPauseSongs();
mediaQuerySwitch();