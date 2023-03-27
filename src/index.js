const express = require('express');
const morgan = require('morgan');

//Inicializacion de Express
const app = express();


//Puerto del Servidor
app.set('PORT', process.env.PORT || 4000 );


//Inicializacion de Morgan
app.use(morgan('dev'));


//Variables Globales


//Rutas

//Public

//Arrancando el servidor
app.listen(app.get('PORT'), () => {
    console.log('Servidor corriendo en el puerto', app.get('PORT'));
});
