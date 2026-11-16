import "dotenv/config";
import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma";
import { FacilityType, UserRole } from "../generated/prisma/client";

const facilities = [
  { name: "Sauna", type: FacilityType.SAUNA, description: "Shared building sauna" },
  { name: "Laundry Room", type: FacilityType.LAUNDRY_ROOM, description: "Washing machines" },
  { name: "Drying Room", type: FacilityType.DRYING_ROOM, description: "Room for drying laundry" },
  { name: "Gathering Room", type: FacilityType.GATHERING_ROOM, description: "Room for meetings and events" },
];

async function seedFacilities() {
  for (const facility of facilities) {
    await prisma.facility.upsert({
      where: { name: facility.name },
      update: {},
      create: facility,
    });
  }
  console.log(`Seeded ${facilities.length} facilities.`);
}

async function seedAdmin() {
  const email = process.env.SEED_ADMIN_EMAIL?.toLowerCase();
  const password = process.env.SEED_ADMIN_PASSWORD;

  if (!email || !password) {
    throw new Error("Set SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD in .env");
  }

  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      name: "Building Admin",
      email,
      passwordHash,
      role: UserRole.ADMIN,
    },
  });
  console.log(`Seeded admin user ${email}.`);
}

async function main() {
  await seedFacilities();
  await seedAdmin();
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());