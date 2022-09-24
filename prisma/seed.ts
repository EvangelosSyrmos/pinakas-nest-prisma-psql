import {Prisma, PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const relaysID: Prisma.RelayCreateInput[] = [
  {buttonID: 1, rpiPin: 2, pinState: false, relayId: 8},
  {buttonID: 2, rpiPin: 3, pinState: false, relayId: 2},
  {buttonID: 3, rpiPin: 4, pinState: false, relayId: 3},
  {buttonID: 4, rpiPin: 17, pinState: false, relayId: 1},
  {buttonID: 5, rpiPin: 27, pinState: false, relayId: 6},
  {buttonID: 6, rpiPin: 22, pinState: false, relayId: 4},
  {buttonID: 7, rpiPin: 10, pinState: false, relayId: 5},
  {buttonID: 8, rpiPin: 9, pinState: false, relayId: 7}
];

async function main() {
  console.log(`Start seeding ...`);
  for (const relay of relaysID) {
    const relayCreated = await prisma.relay.create({
      data: relay,
    });
    console.log(`Created relay with id: ${relayCreated.id}`);
  }
  console.log(`Seeding finished.`);
}

main().then(() => {
  console.log(`Exit ...`);
  prisma.$disconnect();
});
