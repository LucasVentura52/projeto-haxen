$(document).ready(function () {
    $('#infoModal').modal('show');
});

document.getElementById('openModal').addEventListener('click', function () {
    fetch('src/HTML/page.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('modalBody').innerHTML = data;
            $('#infoModal1').modal('show');
        })
        .catch(error => console.error('Erro ao carregar a nova página:', error));
});

document.getElementById('openModal2').addEventListener('click', function () {
    fetch('page.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('modalBody').innerHTML = data;
            $('#infoModal2').modal('show');
        })
        .catch(error => console.error('Erro ao carregar a nova página:', error));
});
