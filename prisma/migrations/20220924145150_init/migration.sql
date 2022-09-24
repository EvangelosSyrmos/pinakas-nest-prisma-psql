-- CreateTable
CREATE TABLE "Relay" (
    "id" SERIAL NOT NULL,
    "buttonID" INTEGER NOT NULL,
    "rpiPin" INTEGER NOT NULL,
    "pinState" BOOLEAN NOT NULL DEFAULT false,
    "relayId" INTEGER NOT NULL,

    CONSTRAINT "Relay_pkey" PRIMARY KEY ("id")
);
