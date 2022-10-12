import {Controller, Get, Param} from '@nestjs/common';
import {ApiOkResponse, ApiTags} from '@nestjs/swagger';

import {RelayEntity} from './entities/relay.entity';
import {RelaysService} from './relays.service';


@ApiTags('relays')
@Controller('relays')
export class RelaysController {
  constructor(private readonly relaysService: RelaysService) {}

  @Get()
  @ApiOkResponse({type: [RelayEntity], isArray: true})
  findAll() {
    return this.relaysService.findAll();
  }

  @Get('powered')
  @ApiOkResponse({type: [RelayEntity], isArray: true})
  findPowered() {
    return this.relaysService.findPowered();
  }

  @Get(':id')
  @ApiOkResponse({type: RelayEntity})
  findOne(@Param('id') id: string) {
    return this.relaysService.findOne(+id);
  }

  @Get(':id/toggle')
  @ApiOkResponse({type: RelayEntity})
  changeState(@Param('id') id: string) {
    return this.relaysService.changeState(+id);
  }
}
