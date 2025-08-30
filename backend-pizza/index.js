import express from "express";
import cors from "cors";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

import authRouter from "./routes/auth.route.js";    

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 
app.use(cors({ origin: "http://localhost:5173" })); 
app.use(express.json()); 

app.use("/api/auth", authRouter);               

app.get("/api/pizzas", async (_req, res) => {
  try {
    const data = await readFile(path.join(__dirname, "data", "pizzas.json"), "utf8");
    res.json(JSON.parse(data));
  } catch (err) {
    res.status(500).json({ error: "Error al leer el archivo de pizzas" });
  }
});

app.get("/api/pizzas/:id", async (req, res) => {
  try {
    const data = await readFile(path.join(__dirname, "data", "pizzas.json"), "utf8");
    const pizzas = JSON.parse(data);
    const pizza = pizzas.find((p) => String(p.id) === String(req.params.id));
    if (!pizza) return res.status(404).json({ error: "Pizza no encontrada" });
    res.json(pizza);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener la pizza por ID" });
  }
});

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use("/api", (_req, res) => res.status(404).json({ error: "Not Found" }));

app.listen(PORT, () => {
  console.log(`✅ Servidor backend corriendo en http://localhost:${PORT}`);
});
