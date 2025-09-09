import ValorantModel from "../models/valorantModel.js"; // ajuste se você manteve o nome do arquivo

class ValorantController {
  // === AGENTS ===
  // GET /api/agents
  getAllAgents(req, res) {
    try {
      const agents = ValorantModel.findAllAgents();
      res.json(agents);
    } catch (error) {
      console.error("Erro ao buscar agents:", error);
      res.status(500).json({ error: "Erro ao buscar agents" });
    }
  }

  // GET /api/agents/:id
  getAgentById(req, res) {
    try {
      const { id } = req.params;
      const agent = ValorantModel.findAgentById(id);
      if (!agent) return res.status(404).json({ error: "Agent não encontrado" });
      res.json(agent);
    } catch (error) {
      console.error("Erro ao buscar agent:", error);
      res.status(500).json({ error: "Erro ao buscar agent" });
    }
  }

  // POST /api/agents
  createAgent(req, res) {
    try {
      const { slug, name, role, country, bio, portraitUrl, abilities } = req.body;
      if (!slug || !name || !role) {
        return res.status(400).json({ error: "slug, name e role são obrigatórios" });
      }
      const newAgent = ValorantModel.createAgent({ slug, name, role, country, bio, portraitUrl, abilities });
      res.status(201).json(newAgent);
    } catch (error) {
      console.error("Erro ao criar agent:", error);
      res.status(500).json({ error: "Erro ao criar agent" });
    }
  }

  // PUT /api/agents/:id
  updateAgent(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updated = ValorantModel.updateAgent(id, data);
      if (!updated) return res.status(404).json({ error: "Agent não encontrado" });
      res.json(updated);
    } catch (error) {
      console.error("Erro ao atualizar agent:", error);
      res.status(500).json({ error: "Erro ao atualizar agent" });
    }
  }

  // DELETE /api/agents/:id
  deleteAgent(req, res) {
    try {
      const { id } = req.params;
      const result = ValorantModel.deleteAgent(id);
      if (!result) return res.status(404).json({ error: "Agent não encontrado" });
      res.status(204).end();
    } catch (error) {
      console.error("Erro ao remover agent:", error);
      res.status(500).json({ error: "Erro ao remover agent" });
    }
  }

  // === MAPS ===
  // GET /api/maps
  getAllMaps(req, res) {
    try {
      const maps = ValorantModel.findAllMaps();
      res.json(maps);
    } catch (error) {
      console.error("Erro ao buscar maps:", error);
      res.status(500).json({ error: "Erro ao buscar maps" });
    }
  }

  // GET /api/maps/:id
  getMapById(req, res) {
    try {
      const { id } = req.params;
      const map = ValorantModel.findMapById(id);
      if (!map) return res.status(404).json({ error: "Map não encontrado" });
      res.json(map);
    } catch (error) {
      console.error("Erro ao buscar map:", error);
      res.status(500).json({ error: "Erro ao buscar map" });
    }
  }

  // POST /api/maps
  createMap(req, res) {
    try {
      const { slug, name, locale, description, splashUrl, minimapUrl, sites, callouts } = req.body;
      if (!slug || !name) return res.status(400).json({ error: "slug e name são obrigatórios" });
      const newMap = ValorantModel.createMap({ slug, name, locale, description, splashUrl, minimapUrl, sites, callouts });
      res.status(201).json(newMap);
    } catch (error) {
      console.error("Erro ao criar map:", error);
      res.status(500).json({ error: "Erro ao criar map" });
    }
  }

  // PUT /api/maps/:id
  updateMap(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updated = ValorantModel.updateMap(id, data);
      if (!updated) return res.status(404).json({ error: "Map não encontrado" });
      res.json(updated);
    } catch (error) {
      console.error("Erro ao atualizar map:", error);
      res.status(500).json({ error: "Erro ao atualizar map" });
    }
  }

  // DELETE /api/maps/:id
  deleteMap(req, res) {
    try {
      const { id } = req.params;
      const result = ValorantModel.deleteMap(id);
      if (!result) return res.status(404).json({ error: "Map não encontrado" });
      res.status(204).end();
    } catch (error) {
      console.error("Erro ao remover map:", error);
      res.status(500).json({ error: "Erro ao remover map" });
    }
  }
}

export default new ValorantController();