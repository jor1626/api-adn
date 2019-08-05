import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublicModule } from './public/public.module';
import { ReportModule } from './report/report.module';
import { EnviromentModule } from './env/enviroment.module';


@Module({
  imports: [EnviromentModule, PublicModule, ReportModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [EnviromentModule]
})
export class AppModule {}
