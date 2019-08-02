
import { Injectable } from '@nestjs/common';
import * as base64Img from 'base64-img';
import * as fs from "fs";
import * as path from 'path';

@Injectable()
export class HelperService {

    constructor(){}

    get fileTemplates(){
        return path.join(__dirname,'..','/assets/files-templates/');
    }

    get fileImg(){
        return path.join(__dirname,'..','/assets/img/');
    }

    get fileLibreries(){
        return path.join(__dirname,'..','/assets/js/');
    }

    public readFile(path: string, archivo: any) {
        const url = `${path}${archivo}`; 
        return fs.readFileSync(url, 'utf8');;
    }

    public convertImageBase64(archivo: string){
        let urlImage = `${this.fileImg}${archivo}`;
        return base64Img.base64Sync(urlImage);
    }
}
