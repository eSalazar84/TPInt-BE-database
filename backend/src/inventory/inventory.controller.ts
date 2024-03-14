import {
    Controller, Get, Post, Delete, Param, Body, HttpStatus, ValidationPipe,
    UsePipes, ParseIntPipe, Query, HttpException, Patch, UseInterceptors, UploadedFile
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { InventoryService } from './inventory.service';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { Items } from '../common/enums';
import { DeleteResult } from 'typeorm';
import { diskStorage } from 'multer';
import { extname } from 'path';



@Controller('inventory')
export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) { }

    @Post()
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, callback) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                return callback(null,`${randomName}${extname(file.originalname)}`)
            }
        })
    }))

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
            return serviceRes
        } catch (err) {
            throw new HttpException(`Couldn't found ${item} at inventory`, HttpStatus.NOT_FOUND);
        }
    }

    @Get(':id')
    async findInvtryById(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number): Promise<CreateInventoryDto[]> {
        try {
            const serviceRes = await this.inventoryService.findInvtryById(id);
            if (Object.keys(serviceRes).length) return serviceRes;
        }
        catch (err) {
            throw new HttpException(`Cannot get inventory with id ${id}`, HttpStatus.NOT_FOUND);
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