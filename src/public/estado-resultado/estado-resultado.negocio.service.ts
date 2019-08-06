
import { Injectable, HttpService } from '@nestjs/common';
import { PdfService } from './../../report/pdf/pdf.service';
import { TypePdf } from './../../report/pdf/pdf.dto';
import { EstadoResultadoDto } from './dto/estado-resultado.dto';
import { map } from "rxjs/operators";

@Injectable()
export class EstadoResultadoNegocioService {

    constructor(
        private readonly httpService: HttpService,
        private readonly reporteService: PdfService
    ){}

    public async listar(){
        return await this.httpService.post('/assets/js/estado-resultado.json').subscribe(response => response);
    }

    public async filtrar(req: EstadoResultadoDto){
        return await this.httpService.post('/assets/js/estado-resultado.json').pipe(
            map(response => {
                const array: Array<EstadoResultadoDto> = response.data;
                array.filter(array => 
                    req.centroCostosList == array.centroCostosList  && req.fechaCorteFinalTxt  >= array.fechaCorteFinalTxt  &&
                    req.fechaCorteFinalTxt <= array.fechaCorteFinalTxt && req.nivelList === array.nivelList &&
                    req.valorExpresadoList === array.valorExpresadoList
                )
            }
        ));
    }

    public async reporte(req: EstadoResultadoDto){
        return await this.reporteService.donwloadPdf(req, TypePdf.estado_resultado);
    }
    
}
