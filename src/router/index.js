import { readFileSync, writeFileSync } from 'fs'
import { v4 as uuidv4 } from 'uuid';

import { Router } from "express";
export const router = Router();

// guardar datos en un archivo .json

// Cargar datos del archivo .json al iniciar la aplicacion.
const jsonBook = readFileSync('src/book.json', 'utf-8') // Leer el book.json;
const book = JSON.parse(jsonBook) // Investigar que hace esta linea

router.get("/", (_req, res) => res.render('index.ejs', { book }))
router.get('/new-entry', (_req, res) => res.render("new-entry"))

router.post('/new-entry', (req, res) => {
  const { Title, author, image, description } = req.body;
  const infoBooks = { id: uuidv4(), Title, author, image, description }
  if ( !Title || !author || !image || !description ) {
    res.status(404).send("Libro no encontrado")
  } else {
    book.push(infoBooks)
    const jsonBook = JSON.stringify(book); // Combierte el array en formato .json
    writeFileSync("src/book.json", jsonBook, 'utf-8') // Escribe o 'guarda' el dato jsonBook en book.json
    res.redirect("/")
  }
})

router.get('/delete/:id', (req, res) => {
  book.filter((b) => b !== req.params.id)
  console.log(req.params)
  res.send("dsa")
})

