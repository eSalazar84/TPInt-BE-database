import { IsInt, IsString, IsNumber, IsNotEmpty } from 'class-validator'  //isNotEmpty que no llegue vacio
import { Expose } from 'class-transformer'
import { Items } from '../../common/enums';

export class UpdateInventoryDto {
    @Expose()
    @IsString()
    @IsNotEmpty()
    readonly code?: string;

    @Expose()
    @IsString()
    @IsNotEmpty()
    readonly product?: string;

    @Expose()
    @IsString()
    @IsNotEmpty()
    readonly description?: string;

    @Expose()
    @IsNumber()
    @IsNotEmpty()
    readonly price?: number;

    @Expose()
    @IsString()
    @IsNotEmpty()
    readonly item?: Items;

    @Expose()
    @IsInt()
    @IsNotEmpty()
    readonly amount?: number;

    @IsString()
    @IsNotEmpty()
    @Expose()
    readonly images?: string;
}