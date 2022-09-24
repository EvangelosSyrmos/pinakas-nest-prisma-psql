import {Injectable} from '@nestjs/common';
import {prisma} from '@prisma/client';
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
    const relayState = await this.prisma.relay.findUnique(
        {where: {id}, select: {pinState: true}});

    return await this.prisma.relay.update({
      where: {id},
      data: {pinState: !relayState['pinState']},
    })
  }
}
