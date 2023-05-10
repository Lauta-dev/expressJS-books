import { Router } from "express";
export const router = Router();

router.get("/", (_req, res) => res.render('index.ejs'))
router.get('/new-entry', (_req, res) => res.render("new-entry"))
router.post('/new-entry', (req, res) => {
  console.log(req.body);
  res.send("re")
})

