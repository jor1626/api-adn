import { Controller, Post, Body, Response, HttpStatus, Get } from '@nestjs/common';
import { EstadoResultadoDto } from './dto/estado-resultado.dto';
import { EstadoResultadoService } from './estado-resultado.service';
import { ApiUseTags, ApiResponse, ApiForbiddenResponse, ApiCreatedResponse } from '@nestjs/swagger';

@ApiUseTags('estado-resultado')
@Controller('api/estado-resultado')
export class EstadoResultadoController {

    constructor(private estadoResultadoService: EstadoResultadoService){}

    @Post()
    @ApiCreatedResponse({ description: 'The record has been successfully created.'})
    @ApiForbiddenResponse({ description: 'Forbidden.'})
    async filtrar(@Response() res, @Body() request?: EstadoResultadoDto) {

        const data = await this.estadoResultadoService.consultar(request);

        return res.status(HttpStatus.OK).json(data);
    }
}
