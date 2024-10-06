//$(document).ready(function () {
//    $('#infoModal').modal('show');
//});

document.getElementById('openModal').addEventListener('click', function () {
    fetch('src/HTML/page.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('modalBody').innerHTML = data;
            $('#infoModal1').modal('show');
        })
        .catch(error => console.error('Erro ao carregar a nova página:', error));
});

function teste(){
    fetch('src/HTML/page.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('modalBody').innerHTML = data;
        $('#infoModal1').modal('show');
    })
}

document.getElementById('openModal2').addEventListener('click', function () {
    fetch('page.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('modalBody').innerHTML = data;
            $('#infoModal2').modal('show');
        })
        .catch(error => console.error('Erro ao carregar a nova página:', error));
});


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