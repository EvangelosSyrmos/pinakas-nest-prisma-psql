import {Module} from '@nestjs/common';

import {PrismaModule} from './../prisma/prisma.module';
import {RelaysController} from './relays.controller';
import {RelaysService} from './relays.service';

@Module({
  imports: [PrismaModule],
  controllers: [RelaysController],
  providers: [RelaysService]
})
export class RelaysModule {
}
