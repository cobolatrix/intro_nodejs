const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Crear una lista de libros inicial vacía
let libros = [];

// Endpoint para agregar un libro
app.post('/agregarLibro', (req, res) => {
  const nuevoLibro = req.body;
  libros.push(nuevoLibro);
  res.status(201).json({ mensaje: 'Libro agregado con éxito', libro: nuevoLibro });
});

// Endpoint para ver todos los libros
app.get('/libros', (req, res) => {
  res.status(200).json(libros);
});

// Endpoint para editar un libro por su ID
app.put('/editarLibro/:id', (req, res) => {
  const libroId = req.params.id;
  const nuevoLibro = req.body;

  // Buscar el libro por su ID
  const libroExistente = libros.find((libro) => libro.id === libroId);

  if (!libroExistente) {
    return res.status(404).json({ mensaje: 'Libro no encontrado' });
  }

  // Actualizar el libro
  libroExistente.titulo = nuevoLibro.titulo || libroExistente.titulo;
  libroExistente.autor = nuevoLibro.autor || libroExistente.autor;

  res.status(200).json({ mensaje: 'Libro actualizado con éxito', libro: libroExistente });
});

// Endpoint para eliminar un libro por su ID
app.delete('/eliminarLibro/:id', (req, res) => {
  const libroId = req.params.id;

  // Filtrar la lista de libros para excluir el libro con el ID dado
  libros = libros.filter((libro) => libro.id !== libroId);

  res.status(200).json({ mensaje: 'Libro eliminado con éxito' });
});

// Iniciar el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
