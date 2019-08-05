import { ApiModelProperty } from '@nestjs/swagger'

export class EstadoResultadoDto {
    @ApiModelProperty()
    readonly nivelList: string;
    @ApiModelProperty()
    public fechaCorteInicialTxt: string;
    @ApiModelProperty()
    public fechaCorteFinalTxt: string;
    @ApiModelProperty()
    readonly valorExpresadoList: string;
    @ApiModelProperty()
    readonly centroCostosList: string;
    @ApiModelProperty()
    readonly filtrocentroCostoTxt: string;
    @ApiModelProperty()
    readonly userGenerator: string;
}



