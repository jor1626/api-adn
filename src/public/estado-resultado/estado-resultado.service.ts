import { Injectable } from '@nestjs/common';
import { EstadoResultadoDto } from './dto/estado-resultado.dto';
import { EstadoResultadoNegocioService } from './estado-resultado.negocio.service';

@Injectable()
export class EstadoResultadoService {

    constructor(private ngEstadoResultado: EstadoResultadoNegocioService){}

    public async listar(){
        return await this.ngEstadoResultado.listar();
    }

    public async filtrar(req: EstadoResultadoDto){
        return await this.ngEstadoResultado.filtrar(req);
    }

    public async reporte(req: EstadoResultadoDto) {
        return await this.ngEstadoResultado.reporte(req);
    }
}
