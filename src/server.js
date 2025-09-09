import express from "express";
import { config } from "dotenv";
import valorantRoutes from "./routes/valorantRoutes.js"; // ajuste se nome diferente

config();
const port = process.env.PORT || 4000;
const app = express();

app.use(express.json());

// Health
app.get("/", (req, res) => {
  res.json({ message: "API Valorant (agents & maps) funcionando!" });
});

// prefixar com /api
app.use("/api", valorantRoutes);

app.listen(port, () => {
  console.log(`Servidor Valorant rodando na porta ${port}`);
});