// const show_menu = document.getElementById('show_menu');
// const show_menu_icon = document.getElementById('show_menu_icon');
// const sidenav = document.getElementById('sidenav');

// if (show_menu==''){
//     // Closing sidenav
//     const close_menu = document.getElementById('close_menu');
//     close_menu.addEventListener('click', function(){
//         show_menu.style.display='none';
//     });
// }
// else{
//     show_menu.addEventListener('click', function(){
//         sidenav.style.display='block';
//         show_menu_icon.setAttribute('class', 'fa fa-close');
//         show_menu.setAttribute("id", "close_menu")
//     });
// }

const sidenav = document.getElementById('sidenav');
const show_menu_btn = document.getElementById('show_menu_btn');
const show_menu_icon = document.getElementById('show_menu_icon');
function shownav(){
    sidenav.style.display='block';
    sidenav.style.position='absolute';
    sidenav.style.height='100%';

    // sidenav.style.z-index='absolute';
    show_menu_icon.setAttribute('class', 'fa fa-close');
    show_menu_btn.setAttribute('onclick', 'hidenav()')
}
function hidenav(){
    sidenav.style.display='none';
    show_menu_btn.setAttribute('onclick', 'shownav()')
    show_menu_icon.setAttribute('class', 'fa fa-bars');
}

window.addEventListener('resize', function() {
    if (window.innerWidth > 991) {
        sidenav.style.display='block';
        sidenav.style.position='relative';
        sidenav.style.height='auto';
        sidenav.style.height='650px';

    }
    if (window.innerWidth < 991) {
        sidenav.style.display='none';

    }
});