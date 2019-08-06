import { Controller, Post, Body, Response, HttpStatus, Get } from '@nestjs/common';
import { EstadoResultadoDto } from './dto/estado-resultado.dto';
import { EstadoResultadoService } from './estado-resultado.service';
import { ApiUseTags, ApiResponse, ApiForbiddenResponse, ApiCreatedResponse } from '@nestjs/swagger';

@ApiUseTags('estado-resultado')
@Controller('api/estado-resultado')
export class EstadoResultadoController {

    constructor(private estadoResultadoService: EstadoResultadoService){}

    @Get()
    async listar(@Response() res){

        const data = await this.estadoResultadoService.listar();

        return res.status(HttpStatus.OK).json(data);
    }

    @Post()
    async filtrar(@Response() res, @Body() request?: EstadoResultadoDto){

        const data = await this.estadoResultadoService.filtrar(request);

        return res.status(HttpStatus.OK).json(data);
    }

    @Post()
    async reporte(@Response() res, @Body() request?: EstadoResultadoDto){

        const data = await this.estadoResultadoService.reporte(request);

        return res.status(HttpStatus.OK).json(data);
    }


}
