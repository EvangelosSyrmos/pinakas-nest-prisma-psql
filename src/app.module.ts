import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {RelaysModule} from './relays/relays.module';

@Module({
  imports: [RelaysModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
