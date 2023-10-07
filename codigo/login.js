const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Habilitar el uso de JSON en las solicitudes

// Ruta para autenticar al usuario
app.post('/login', (req, res) => {
  const { usuario, contraseña } = req.body;

  // Comprobar si el usuario y la contraseña son correctos
  if (usuario === 'edwin' && contraseña === '123') {
    res.status(200).send('Hola Edwin');
  } else {
    res.status(401).send('Usuario o contraseña incorrectos');
  }
});

// Iniciar el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
