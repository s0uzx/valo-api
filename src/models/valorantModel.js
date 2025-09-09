import prisma from "../../prisma/prisma.js";

let agents = [
  {
    id: 1,
    slug: "jett",
    name: "Jett",
    role: "DUELIST",
    country: "South Korea",
    bio: "Ágil e evasiva, domina a mobilidade.",
    portraitUrl: "https://example.com/agents/jett.png",
    abilities: [
      { slot: "C", name: "Cloudburst", description: "Lança fumaça" },
      { slot: "Q", name: "Updraft", description: "Impulso vertical" },
      { slot: "E", name: "Tailwind", description: "Dash" },
      { slot: "X", name: "Blade Storm", description: "Facas ult" }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    slug: "brimstone",
    name: "Brimstone",
    role: "CONTROLLER",
    country: "USA",
    bio: "Controle de zonas com utilitárias de fumaça.",
    portraitUrl: "https://example.com/agents/brimstone.png",
    abilities: [
      { slot: "C", name: "Stim Beacon", description: "Buff de tiro" },
      { slot: "Q", name: "Incendiary", description: "Molotov" },
      { slot: "E", name: "Sky Smoke", description: "Fumaças remotas" },
      { slot: "X", name: "Orbital Strike", description: "Ult laser" }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

let maps = [
  {
    id: 1,
    slug: "haven",
    name: "Haven",
    locale: "Thimphu, Bhutan",
    description: "Mapa com três sites.",
    splashUrl: "https://example.com/maps/haven.jpg",
    minimapUrl: "https://example.com/maps/haven_minimap.png",
    sites: [{ label: "A" }, { label: "B" }, { label: "C" }],
    callouts: [
      { name: "A Long", siteLabel: "A", x: 0.82, y: 0.33 },
      { name: "C Long", siteLabel: "C", x: 0.10, y: 0.65 }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    slug: "ascent",
    name: "Ascent",
    locale: "Venice, Italy",
    description: "Mapa com duas bombas e mid control.",
    splashUrl: "https://example.com/maps/ascent.jpg",
    minimapUrl: "https://example.com/maps/ascent_minimap.png",
    sites: [{ label: "A" }, { label: "B" }],
    callouts: [{ name: "Mid", x: 0.5, y: 0.5 }],
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

let nextAgentId = 3;
let nextMapId = 3;

class ValorantModel {
  // AGENTS
  findAllAgents() {
    return agents;
  }
  findAgentById(id) {
    return agents.find(a => a.id === Number(id)) || null;
  }
  createAgent({ slug, name, role, country, bio, portraitUrl, abilities }) {
    const newAgent = {
      id: nextAgentId++,
      slug,
      name,
      role,
      country,
      bio,
      portraitUrl,
      abilities: abilities || [],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    agents.push(newAgent);
    return newAgent;
  }
  updateAgent(id, data) {
    const agent = this.findAgentById(id);
    if (!agent) return null;
    Object.assign(agent, data, { updatedAt: new Date() });
    return agent;
  }
  deleteAgent(id) {
    const found = this.findAgentById(id);
    if (!found) return null;
    agents = agents.filter(a => a.id !== Number(id));
    return true;
  }

  // MAPS
  findAllMaps() {
    return maps;
  }
  findMapById(id) {
    return maps.find(m => m.id === Number(id)) || null;
  }
  createMap({ slug, name, locale, description, splashUrl, minimapUrl, sites, callouts }) {
    const newMap = {
      id: nextMapId++,
      slug,
      name,
      locale,
      description,
      splashUrl,
      minimapUrl,
      sites: sites || [],
      callouts: callouts || [],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    maps.push(newMap);
    return newMap;
  }
  updateMap(id, data) {
    const map = this.findMapById(id);
    if (!map) return null;
    Object.assign(map, data, { updatedAt: new Date() });
    return map;
  }
  deleteMap(id) {
    const found = this.findMapById(id);
    if (!found) return null;
    maps = maps.filter(m => m.id !== Number(id));
    return true;
  }
}

export default new ValorantModel();