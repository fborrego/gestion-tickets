//Comando para establecer la conexión
var socket = io();

var searchParams = new URLSearchParams(window.location.search); //Parámetros que vienen por la url
var label = $('small');

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');

$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {

        if (resp === 'No hay tickets') {
            label.text('No hay tickets');
            alert(resp);
            return;
        }
        label.text('Ticket ' + resp.numero);
    });
});