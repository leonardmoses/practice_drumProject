let btn = document.querySelectorAll('.drum')

for (let i=0; i<btn.length; i++) {
    btn[i].addEventListener('click', ()=>{alert('click')})
}
