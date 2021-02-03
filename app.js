let kits = document.querySelectorAll('.kit');
kits.forEach(kit => {

    kit.addEventListener('click', () => {

        makeEffect(kit);
        playSound(kit.innerHTML);
        
    });
})

document.addEventListener('keypress', (event) => {
    let key = document.querySelector('.' + event.key);
    makeEffect(key);
    playSound(event.key.toLocaleUpperCase())
});


const makeEffect = (element) => {
    element.classList.add('click-effect');
    setTimeout(function(){
        element.classList.remove('click-effect');
    }, 100);
}


const playSound = (kit) => {
    let audio;
    switch (kit) {
        case 'W':
            audio = new Audio('sounds/tom-4.mp3')
            break;
        case 'S':
            audio = new Audio('sounds/tom-3.mp3')
            break;
        case 'A':
            audio = new Audio('sounds/tom-2.mp3')
            break;
        case 'D':
            audio = new Audio('sounds/tom-1.mp3')
            break;
        case 'J':
            audio = new Audio('sounds/snare.mp3')
            break;
        case 'K':
            audio = new Audio('sounds/kick-bass.mp3')
            break;
        case 'L':
            audio = new Audio('sounds/crash.mp3')
            break;
        default:
            break;
    }
    audio.play();
}