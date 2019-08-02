import { Module } from '@nestjs/common';
import { EstadoResultadoController } from './estado-resultado.controller';
import { EstadoResultadoService } from './estado-resultado.service';
import { EstadoResultadoNegocioService } from './estado-resultado.negocio.service';
import { ReportModule } from './../../report/report.module';

@Module({
  imports: [ReportModule],
  controllers: [EstadoResultadoController],
  providers: [EstadoResultadoService, EstadoResultadoNegocioService]
})
export class EstadoResultadoModule {}
