import { Module } from '@nestjs/common';
import { EnviromentService } from './enviroment.service';

@Module({
    providers: [EnviromentService],
    exports: [EnviromentService]
})
export class EnviromentModule {
}