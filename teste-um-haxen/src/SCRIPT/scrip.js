//SCRIPT BUTTON ITENS NAVBAR
function abrirModalNavbar1(){
    fetch('src/HTML/navbar-pages/page1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('modalBodyNav1').innerHTML = data;
        $('#infoModal1').modal('show');
    })
}

function abrirModalNavbar2(){
    fetch('src/HTML/navbar-pages/page2.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('modalBodyNav2').innerHTML = data;
            $('#infoModal2').modal('show');
        })
}

function abrirModalNavbar3(){
    fetch('src/HTML/navbar-pages/page3.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('modalBodyNav3').innerHTML = data;
            $('#infoModal3').modal('show');
        })
}

function abrirModalNavbar4(){
    fetch('src/HTML/navbar-pages/page4.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('modalBodyNav4').innerHTML = data;
            $('#infoModal4').modal('show');
        })
}

function abrirModalNavbar5(){
    fetch('src/HTML/quemSomos.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('modalBodyNav5').innerHTML = data;
            $('#infoModal5').modal('show');
        })
}










//SCRIPT DATA DO FOOTER
document.getElementById("year").textContent = new Date().getFullYear();









//SCRIP BUTTON CARD
function abrirModalCard1() {
    fetch('src/HTML/card-pages/pageCard1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('modalBody1').innerHTML = data;
        $('#infoModalCard1').modal('show');
    })
}

function abrirModalCard2() {
    fetch('src/HTML/card-pages/pageCard2.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('modalBody2').innerHTML = data;
        $('#infoModalCard2').modal('show');
    })
}

function abrirModalCard3() {
    fetch('src/HTML/card-pages/pageCard3.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('modalBody3').innerHTML = data;
        $('#infoModalCard3').modal('show');
    })
}






function abrirModalCarousel3() {
    fetch('src/HTML/carousel-pages/pageCarousel3.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('modalBodyCo3').innerHTML = data;
        $('#infoModalCo3').modal('show');
    })
}