
import { Injectable, HttpService } from '@nestjs/common';
import { PdfService } from './../../report/pdf/pdf.service';
import { TypePdf } from './../../report/pdf/pdf.dto';
import { EstadoResultadoDto } from './dto/estado-resultado.dto';
import { map } from "rxjs/operators";

@Injectable()
export class EstadoResultadoNegocioService {

    private _jsonURL = 'http://localhost:3000/js/estado-resultado.json';

    constructor(
        private httpService: HttpService,   
        private readonly reporteService: PdfService
    ){}

    async listar(): Promise<any>{
        return await this.httpService.get(this._jsonURL).toPromise().then(data => data.data);
    }

    public async filtrar(req: EstadoResultadoDto): Promise<any> {
        return await this.httpService.get(this._jsonURL).toPromise().then(data => data.data);
    }

    public async reporte(req: EstadoResultadoDto){
        return await this.reporteService.donwloadPdf(req, TypePdf.estado_resultado);
    }
    
}
