let btn = document.querySelectorAll('.drum')
// let audioTom1 = new Audio('/sounds/tom-1.mp3')

for (let i=0; i<btn.length; i++) {

    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        let btnNew = this
        btnNew.style.color = "blue";
        console.log(btnNew)
    })
}
