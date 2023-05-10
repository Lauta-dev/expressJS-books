// importa funcion para hacer funionar __dirname
import { __dirname } from "./__dirname.js"; 
import { router } from "./router/index.js";

import express from "express";
export const app = express();

// Settings
app.use(express.json())
app.set('views', __dirname('views'))
app.set('view engine', 'ejs')

// middlewares
app.use((req, res, next) => {
  const { method, httpVersion, protocol} = req
  console.log({
    "Metodo": method,
    "Vercion HTTP": `${protocol} v${httpVersion}`,
    "Estado": res.statusCode
  })
  next()
})

app.use(express.urlencoded({extended: false}))

// Router
app.use(router)

// Static/public
app.use(express.static(__dirname('public')));

// 404
app.use((_req, res) => res.status(404).send("Pág no encontrada"))

