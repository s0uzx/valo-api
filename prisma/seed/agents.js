async function seedAgents(prisma) {
  console.log("👥 Inserindo agentes...");

  const agents = [
    {
      slug: "jett",
      name: "Jett",
      role: "DUELIST",
      country: "South Korea",
      bio: "Ágil e evasiva, domina a mobilidade.",
      portraitUrl: "https://example.com/agents/jett.png",
      abilities: [
        { slot: "C", name: "Cloudburst", description: "Lança fumaça." },
        { slot: "Q", name: "Updraft", description: "Impulso vertical." },
        { slot: "E", name: "Tailwind", description: "Dash." },
        { slot: "X", name: "Blade Storm", description: "Facas ult." },
      ],
    },
    {
      slug: "brimstone",
      name: "Brimstone",
      role: "CONTROLLER",
      country: "USA",
      bio: "Controle de zonas com utilitárias de fumaça.",
      portraitUrl: "https://example.com/agents/brimstone.png",
      abilities: [
        { slot: "C", name: "Stim Beacon", description: "Buff de tiro." },
        { slot: "Q", name: "Incendiary", description: "Granada incendiária." },
        { slot: "E", name: "Sky Smoke", description: "Fumaças remotas." },
        { slot: "X", name: "Orbital Strike", description: "Laser orbital." },
      ],
    },
    {
      slug: "sage",
      name: "Sage",
      role: "SENTINEL",
      country: "China",
      bio: "Curandeira e protetora, segura o avanço inimigo.",
      portraitUrl: "https://example.com/agents/sage.png",
      abilities: [
        { slot: "C", name: "Barrier Orb", description: "Cria um muro sólido." },
        { slot: "Q", name: "Slow Orb", description: "Área de lentidão." },
        { slot: "E", name: "Healing Orb", description: "Orbe de cura." },
        { slot: "X", name: "Resurrection", description: "Revive aliado." },
      ],
    },
  ];

  for (const agent of agents) {
    await prisma.agent.upsert({
      where: { slug: agent.slug },
      update: {},
      create: {
        slug: agent.slug,
        name: agent.name,
        role: agent.role,
        country: agent.country,
        bio: agent.bio,
        portraitUrl: agent.portraitUrl,
        abilities: {
          create: agent.abilities,
        },
      },
    });
  }

  console.log("✅ Agentes inseridos.");
}

module.exports = { seedAgents };