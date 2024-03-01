import { IsInt, IsString, IsNumber, IsNotEmpty, IsEnum } from 'class-validator'  //isNotEmpty que no llegue vacio
import { Expose } from 'class-transformer'
import { Items } from '../../common/enums';

export class CreateInventoryDto {
    @Expose()
    @IsString()
    @IsNotEmpty()
    readonly code: string;

    @Expose()
    @IsString()
    @IsNotEmpty()
    readonly product: string;

    @Expose()
    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @Expose()
    @IsNumber()
    @IsNotEmpty()
    readonly price: number;

    @Expose()
    @IsNotEmpty()
    @IsEnum(Items)
    readonly item: Items;

    @Expose()
    @IsInt()
    @IsNotEmpty()
    readonly amount: number;

    @IsString()
    readonly images: string;
}