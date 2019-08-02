import { Module,  } from '@nestjs/common';
import { PdfService } from './pdf/pdf.service';
import { EnviromentModule } from './../env/enviroment.module';
import { HelperService } from './../core/helper.service';

@Module({
    imports: [EnviromentModule],
    providers: [PdfService, HelperService],
    exports: [PdfService]
})
export class ReportModule {}