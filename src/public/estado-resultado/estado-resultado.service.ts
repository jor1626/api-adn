import { Injectable } from '@nestjs/common';
import { EstadoResultadoDto } from './dto/estado-resultado.dto';
import { EstadoResultadoNegocioService } from './estado-resultado.negocio.service';

@Injectable()
export class EstadoResultadoService {

    constructor(private ngEstadoResultado: EstadoResultadoNegocioService){}

    public async consultar(req: EstadoResultadoDto){
        let data = await this.ngEstadoResultado.filtrarEstadoResultado(req).then(data => data);
        return data;
    }
}
