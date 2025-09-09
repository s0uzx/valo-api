const { PrismaClient } = require("@prisma/client");
const { seedAgents } = require("./agents");
const { seedMaps } = require("./maps");

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed do Valorant...");

  await seedAgents(prisma);
  await seedMaps(prisma);

  console.log("✅ Seed concluído com sucesso!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });