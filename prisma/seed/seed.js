import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ==== Agents ====
  await prisma.agent.create({
    data: {
      slug: "jett",
      name: "Jett",
      role: "DUELIST",
      country: "South Korea",
      bio: "Ágil e evasiva, domina a mobilidade.",
      portraitUrl: "https://example.com/agents/jett.png",
      abilities: {
        create: [
          { slot: "C", name: "Cloudburst", description: "Lança fumaça" },
          { slot: "Q", name: "Updraft", description: "Impulso vertical" },
          { slot: "E", name: "Tailwind", description: "Dash" },
          { slot: "X", name: "Blade Storm", description: "Facas ult" },
        ],
      },
    },
  });

  await prisma.agent.create({
    data: {
      slug: "brimstone",
      name: "Brimstone",
      role: "CONTROLLER",
      country: "USA",
      bio: "Controle de zonas com utilitárias de fumaça.",
      portraitUrl: "https://example.com/agents/brimstone.png",
      abilities: {
        create: [
          { slot: "C", name: "Stim Beacon", description: "Buff de tiro" },
          { slot: "Q", name: "Incendiary", description: "Granada incendiária" },
          { slot: "E", name: "Sky Smoke", description: "Fumaças remotas" },
          { slot: "X", name: "Orbital Strike", description: "Laser orbital" },
        ],
      },
    },
  });

  await prisma.agent.create({
    data: {
      slug: "sage",
      name: "Sage",
      role: "SENTINEL",
      country: "China",
      bio: "Curandeira e protetora, segura o avanço inimigo.",
      portraitUrl: "https://example.com/agents/sage.png",
      abilities: {
        create: [
          { slot: "C", name: "Barrier Orb", description: "Cria um muro sólido" },
          { slot: "Q", name: "Slow Orb", description: "Área de lentidão" },
          { slot: "E", name: "Healing Orb", description: "Orbe de cura" },
          { slot: "X", name: "Resurrection", description: "Revive aliado" },
        ],
      },
    },
  });

  // ==== Maps ====
  await prisma.map.create({
    data: {
      slug: "haven",
      name: "Haven",
      locale: "Thimphu, Bhutan",
      description: "Mapa com três sites de bomb.",
      splashUrl: "https://example.com/maps/haven.jpg",
      minimapUrl: "https://example.com/maps/haven_minimap.png",
      sites: {
        create: [{ label: "A" }, { label: "B" }, { label: "C" }],
      },
      callouts: {
        create: [
          { name: "A Long", siteLabel: "A", x: 0.82, y: 0.33 },
          { name: "C Long", siteLabel: "C", x: 0.10, y: 0.65 },
        ],
      },
    },
  });

  await prisma.map.create({
    data: {
      slug: "ascent",
      name: "Ascent",
      locale: "Venice, Italy",
      description: "Mapa com duas bombas e mid control.",
      splashUrl: "https://example.com/maps/ascent.jpg",
      minimapUrl: "https://example.com/maps/ascent_minimap.png",
      sites: {
        create: [{ label: "A" }, { label: "B" }],
      },
      callouts: {
        create: [{ name: "Mid", siteLabel: null, x: 0.5, y: 0.5 }],
      },
    },
  });

  await prisma.map.create({
    data: {
      slug: "bind",
      name: "Bind",
      locale: "Rabat, Morocco",
      description: "Mapa famoso pelos teleportes.",
      splashUrl: "https://example.com/maps/bind.jpg",
      minimapUrl: "https://example.com/maps/bind_minimap.png",
      sites: {
        create: [{ label: "A" }, { label: "B" }],
      },
      callouts: {
        create: [
          { name: "Teleport A", siteLabel: "A", x: 0.2, y: 0.6 },
          { name: "Teleport B", siteLabel: "B", x: 0.7, y: 0.4 },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    console.log("🌱 Seed concluído com sucesso!");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });