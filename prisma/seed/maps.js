async function seedMaps(prisma) {
  console.log("🗺️ Inserindo mapas...");

  const maps = [
    {
      slug: "haven",
      name: "Haven",
      locale: "Thimphu, Bhutan",
      description: "Mapa com três sites de bomb.",
      splashUrl: "https://example.com/maps/haven.jpg",
      minimapUrl: "https://example.com/maps/haven_minimap.png",
      sites: [{ label: "A" }, { label: "B" }, { label: "C" }],
      callouts: [
        { name: "A Long", siteLabel: "A", x: 0.82, y: 0.33 },
        { name: "C Long", siteLabel: "C", x: 0.10, y: 0.65 },
      ],
    },
    {
      slug: "ascent",
      name: "Ascent",
      locale: "Venice, Italy",
      description: "Mapa com duas bombas e mid control.",
      splashUrl: "https://example.com/maps/ascent.jpg",
      minimapUrl: "https://example.com/maps/ascent_minimap.png",
      sites: [{ label: "A" }, { label: "B" }],
      callouts: [{ name: "Mid", siteLabel: null, x: 0.5, y: 0.5 }],
    },
  ];

  for (const map of maps) {
    await prisma.map.upsert({
      where: { slug: map.slug },
      update: {},
      create: {
        slug: map.slug,
        name: map.name,
        locale: map.locale,
        description: map.description,
        splashUrl: map.splashUrl,
        minimapUrl: map.minimapUrl,
        sites: { create: map.sites },
        callouts: { create: map.callouts },
      },
    });
  }

  console.log("✅ Mapas inseridos.");
}

module.exports = { seedMaps };