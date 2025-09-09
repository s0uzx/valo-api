import express from "express";
import ValorantController from "../controllers/valorantController.js"; // ajuste de caminho/nome conforme tenha salvo

const router = express.Router();

// AGENTS
router.get("/agents", ValorantController.getAllAgents);
router.get("/agents/:id", ValorantController.getAgentById);
router.post("/agents", ValorantController.createAgent);
router.put("/agents/:id", ValorantController.updateAgent);
router.delete("/agents/:id", ValorantController.deleteAgent);

// MAPS
router.get("/maps", ValorantController.getAllMaps);
router.get("/maps/:id", ValorantController.getMapById);
router.post("/maps", ValorantController.createMap);
router.put("/maps/:id", ValorantController.updateMap);
router.delete("/maps/:id", ValorantController.deleteMap);

export default router;