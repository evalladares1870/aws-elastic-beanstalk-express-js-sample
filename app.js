const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hola Bienvenido a Primer Despliegue EVL!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
