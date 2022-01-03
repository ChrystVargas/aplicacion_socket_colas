var socket = io();

var label = $('small');

var searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es nesesario');
}

var escritorio = searchParams.get('escritorio');
$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {
        if (resp === 'No hay tickets') {
            label.text('No hay Tickets');
            alert(resp);
            return;
        }
        label.text('Ticket ' + resp.numero);
    });
});