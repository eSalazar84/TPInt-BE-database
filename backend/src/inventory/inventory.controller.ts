import {
    Controller, Get, Post, Delete, Param, Body, HttpStatus, NotFoundException, ValidationPipe,
    UsePipes, ParseIntPipe, Query, HttpException, Patch
} from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { Items } from '../common/enums';
import { DeleteResult } from 'typeorm';



@Controller('inventory')
export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) { }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async createInvtry(@Body() invtry: CreateInventoryDto): Promise<CreateInventoryDto> {
        try {
            return await this.inventoryService.createInvtry(invtry)
        } catch (error) {
            throw new HttpException('inventory creation failed', HttpStatus.BAD_REQUEST)
        }
    }

    @Get()
    async findAll(@Query('item') item?: Items): Promise<CreateInventoryDto[]> {
        try {
            let serviceRes: CreateInventoryDto[];
            if (item) {
                serviceRes = await this.inventoryService.findInvtryByItem(item);
            } else {
                serviceRes = await this.inventoryService.findAll();
            }
            return serviceRes // Enviar la respuesta como JSON
        } catch (err) {
            throw new HttpException(`Couldn't found ${item} at inventory`, HttpStatus.NOT_FOUND);
        }
    }

    @Get(':id')
    async findInvtryById(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number): Promise<CreateInventoryDto[]> {
        try {
            const serviceRes = await this.inventoryService.findInvtryById(id);
            if (Object.keys(serviceRes).length) {
                return serviceRes;
            }
            else {
                throw new HttpException(`registration ${id} does not exist`, HttpStatus.NOT_FOUND)
            }
        } catch (err) {
            throw new NotFoundException(`Cannot get inventory with id ${id}`);
        }
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async updateInvtry(@Param('id') id: number, @Body() updateInvtryDto: UpdateInventoryDto): Promise<UpdateInventoryDto[]> {
        try {
            return await this.inventoryService.updateInvtry(id, updateInvtryDto)
        } catch (error) {
            throw new HttpException(`Item ${updateInvtryDto.item} with product ${updateInvtryDto.product} `, HttpStatus.BAD_REQUEST)
        }
    }

    @Delete(':id')
    async deleteInvtry(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number): Promise<DeleteResult> {
        try {
            return await this.inventoryService.deleteInvtry(id)
        } catch (error) {
            throw new HttpException(`Item not found`, HttpStatus.BAD_REQUEST)
        }
    }
}