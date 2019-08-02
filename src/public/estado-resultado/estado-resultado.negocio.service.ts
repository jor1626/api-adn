
import { Injectable } from '@nestjs/common';
import { PdfService } from './../../report/pdf/pdf.service';
import { TypePdf } from './../../report/pdf/pdf.dto';
import { EstadoResultadoDto } from './dto/estado-resultado.dto';

@Injectable()
export class EstadoResultadoNegocioService {

    private _jsonURL = 'public/utils/data.json';

    constructor(private reporteService: PdfService){}

    public async filtrarEstadoResultado(req: EstadoResultadoDto){
        const data =  this._jsonURL;
        return this.reporteService.donwloadPdf(req, TypePdf.estado_resultado);
    }
    
}
