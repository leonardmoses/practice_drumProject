let btn = document.querySelectorAll('.drum')


for (let i=0; i<btn.length; i++) {

    document.querySelectorAll('.drum')[i].addEventListener('click', function () {

        let buttonpressed = this.innerHTML

        switch (buttonpressed) {
            case 'w':
                let audioTom1 = new Audio('/sounds/tom-1.mp3')
                audioTom1.play();
                break;
            case 'a':
                let audioTom2 = new Audio('/sounds/tom-2.mp3')
                audioTom2.play();
                break;
            case 's':
                let audioTom3 = new Audio('/sounds/tom-3.mp3')
                audioTom3.play();
                break;
            case 'd':
                let audioTom4 = new Audio('/sounds/tom-4.mp3')
                audioTom4.play();
                break;
            case 'j':
                let kick = new Audio('/sounds/kick-bass.mp3')
                kick.play();
                break;
            case 'k':
                let snare = new Audio('/sounds/snare.mp3')
                snare.play();
                break
            case 'l':
                let crash = new Audio('/sounds/crash.mp3')
                crash.play();
                break
            default: console.log(buttonpressed)
                break;
        }

        console.log(buttonpressed)

    })
}
