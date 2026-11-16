import "dotenv/config";
import { prisma } from "../lib/prisma";
import { FacilityType } from "../generated/prisma/client";

const facilities = [
  { name: "Sauna", type: FacilityType.SAUNA, description: "Shared building sauna" },
  { name: "Laundry Room", type: FacilityType.LAUNDRY_ROOM, description: "Washing machines" },
  { name: "Drying Room", type: FacilityType.DRYING_ROOM, description: "Room for drying laundry" },
  { name: "Gathering Room", type: FacilityType.GATHERING_ROOM, description: "Room for meetings and events" },
];

async function main() {
  for (const facility of facilities) {
    await prisma.facility.upsert({
      where: { name: facility.name },
      update: {},
      create: facility,
    });
  }
  console.log(`Seeded ${facilities.length} facilities.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());