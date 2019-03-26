const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', (client) => {
        console.log('El Usuario se ha desconectado');
    });
    // Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIÓ BIEN'
        //     });
        // } else {
        //     callback({
        //         resp: '¡TODO SALIÓ MAAAAALL!'
        //     });
        // }
    });
});