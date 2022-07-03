let btn = document.querySelectorAll('.drum')


for (let i=0; i<btn.length; i++) {

    document.querySelectorAll('.drum')[i].addEventListener('click', function () {

        let buttonpressed = this.innerHTML

        switch (buttonpressed) {
            case 'w':
                let audioTom1 = new Audio('/sounds/tom-1.mp3')
                audioTom1.play();
                break;
            
            
            default:
                break;
        }

        console.log(buttonpressed)

    })
}
