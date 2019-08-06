
import { Injectable } from '@nestjs/common';

@Injectable()
export class EnviromentService {
    
    constructor(){}

    get urlBase(){
        return 'http://localhost:3000';
    }
   
}
