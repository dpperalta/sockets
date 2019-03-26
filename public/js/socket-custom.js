var socket = io();
// ON es para recibir información
socket.on('connect', function() {
    console.log('Conectado al Servidor');
});
socket.on('disconnect', function() {
    console.log('Se ha perdido la conexión con el servidor');
});
//EMIT es para enviar inforamción
socket.emit('enviarMensaje', {
    usuario: 'Diego',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta del server:', resp);
});
// Escuchar desde el server
socket.on('enviarMensaje', function(mensaje) {
    console.log('Mensaje del Servidor: ', mensaje);
});