// fetch('header.html')
//     .then(response => response.text())
//     .then(data => document.getElementById('header').innerHTML = data);

fetch('sidenav.html')
    .then(response => response.text())
    .then(data => document.getElementById('sidenav').innerHTML = data);
