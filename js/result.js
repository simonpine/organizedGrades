let opener = document.querySelector("#fil");
let select = document.querySelector("#select");
opener.addEventListener('click', () => {
    if (opener.classList == ('opener openerClose')){
        opener.classList.remove('openerClose')
    }
    else{
        opener.classList.add('openerClose')
    }
    if (select.classList == ('open open2')){
        select.classList.remove('open2')
    }
    else{
        select.classList.add('open2')
    }
})