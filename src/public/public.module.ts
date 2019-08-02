import { Module } from '@nestjs/common';
import { EstadoResultadoModule } from './estado-resultado/estado-resultado.module';
import { HelperService } from '../core/helper.service';

@Module({
    imports: [EstadoResultadoModule],
    providers: [HelperService],
    exports: [EstadoResultadoModule]
})
export class PublicModule {}