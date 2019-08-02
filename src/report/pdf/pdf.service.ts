
import { Injectable } from '@nestjs/common';
import { TypePdf, PdfStyle } from './pdf.dto';
import { HelperService } from './../../core/helper.service';
import * as pdf from "dynamic-html-pdf";

@Injectable()
export class PdfService {
    pathTemplates: string;
    pathLibreries: string;
    fileImg: string;
    
    constructor(private helperService: HelperService){
        this.pathTemplates  = this.helperService.fileTemplates;
        this.fileImg        = this.helperService.fileImg;
        this.pathLibreries  = this.helperService.fileLibreries;
    }

    public async donwloadPdf(data: any, archivo: TypePdf){
        const document  = await this.getDocument(data, archivo);
        const options   = await this.pdfOptions();
        return this.createPdf(document, options);
    }

    private getDocument(data: any, archivo: TypePdf){
        const libreria  = this.helperService.readFile(this.pathLibreries, PdfStyle.libreria);
        const html      = this.helperService.readFile(this.pathTemplates, archivo);
        return {
            type: 'file',
            template: html,
            context: {
                options: {
                    data: JSON.stringify(data),
                    fecha_inicial: new Date(),
                    cabecera: this.helperService.convertImageBase64(PdfStyle.cabecera),
                    logo: this.helperService.convertImageBase64(PdfStyle.logo),
                    libreria: libreria
                },
            },
            path: './informe-pyg.pdf'
        };
    }

    private pdfOptions(){
        return {
            orientation: "portrait"
        };
    }

    private createPdf(document: any, options: any) {
        return pdf.create(document, options).then(res => {
            console.log(res)
        })
        .catch(error => {
            console.error(error)
        });
    }
}
