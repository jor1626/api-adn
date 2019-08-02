import { Controller, Post, Body, Response, HttpStatus, Get } from '@nestjs/common';
import { EstadoResultadoDto } from './dto/estado-resultado.dto';
import { EstadoResultadoService } from './estado-resultado.service';

@Controller('api/estado-resultado')
export class EstadoResultadoController {

    constructor(private estadoResultadoService: EstadoResultadoService){}

    // @Post()
    // async filtrar(@Response() res, @Body() request: EstadoResultadoDto) : Promise<any[]> {

    //     const data = await this.estadoResultadoService.consultar(request);

    //     return res.status(HttpStatus.OK).json(data);
    // }

    @Post()
    async filtrar(@Response() res, @Body() request?: EstadoResultadoDto) {

        const data = await this.estadoResultadoService.consultar(request);

        return res.status(HttpStatus.OK).json(data);
    }
}
