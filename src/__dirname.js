// Para poder usar __dirname
import { fileURLToPath } from "url";
import { join, dirname } from 'path';

const f = fileURLToPath(import.meta.url); // __filename
const d = dirname(f); // __dirname

export const __dirname = (ruta) => join(d, ruta)
