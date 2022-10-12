import {Injectable, OnModuleInit} from '@nestjs/common';
import gpiop from 'rpi-gpio';
import {PrismaService} from 'src/prisma/prisma.service';


@Injectable()
export class RelaysService {
  constructor(private prisma: PrismaService) {}

  async findPowered() {
    return await this.prisma.relay.findMany({
      where: {pinState: true},
    });
  }

  async findAll() {
    return await this.prisma.relay.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.relay.findUnique({where: {id}});
  }

  async changeState(id: number) {
    const {rpiPin, pinState} = await this.prisma.relay.findUnique(
        {where: {id}, select: {rpiPin: true, pinState: true}});

    gpiop.setup(rpiPin, gpiop.DIR_OUT);
    gpiop.write(rpiPin, !pinState);

    return await this.prisma.relay.update({
      where: {id},
      data: {pinState: !pinState['pinState']},
    })
  }
}
