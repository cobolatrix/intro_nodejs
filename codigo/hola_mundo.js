const express = require('express');
const app = express();
const port = 3000;

// Ruta para la página de inicio
app.get('/', (req, res) => {
  // Establecer el código de estado 200 (OK) y enviar la respuesta
  res.status(200).send('Hola Mundo con Express');
});

// Iniciar el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
