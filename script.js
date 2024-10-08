
const clicked = (e) => {
    console.log(e.target)
}

const nav_btn = document.getElementById('nav_bar')
const menu = document.getElementById('arco_menu')

nav_btn.addEventListener('mouseover',()=>{
    menu.style.visibility = 'visible';
    menu.style.position = 'relative';
    menu.style.opacity = 1;
    menu.classList.add('show_animation')
    
});

menu.addEventListener('mouseenter', ()=> {
    menu.style.visibility = 'visible';
    menu.style.position = 'relative';
    menu.style.opacity = 1;
})

menu.addEventListener('mouseleave', ()=> {
    console.log('hidden')
    menu.style.visibility = 'hidden';
    menu.style.opacity = 0;
    menu.classList.remove('show_animation')
})
