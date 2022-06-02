const socket = io();

const lblonline = document.querySelector('#lblonline');
const lbloffline = document.querySelector('#lbloffline');


socket.on('connect',() => {
    console.log('Conectado al servidor');

    lbloffline.style.display = 'none';  
    lblonline.style.display  = '';
} );

socket.on('disconnect',() => {
    console.log('Desconectado del servidor');
 

    lbloffline.style.display = '';  
    lblonline.style.display  = 'none';
} );