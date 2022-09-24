import {ApiProperty} from '@nestjs/swagger';
import {Relay} from '@prisma/client';

export class RelayEntity implements Relay {
  @ApiProperty() id: number;

  @ApiProperty() buttonID: number;

  @ApiProperty() rpiPin: number;

  @ApiProperty() pinState: boolean;

  @ApiProperty() relayId: number;
}
