import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Inventory } from './entitites/inventory.entity';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Items } from '../common/enums';

@Injectable()
export class InventoryService {
  constructor(@InjectRepository(Inventory) private inventoryRepository: Repository<Inventory>) { }

  createInvtry(invtry: CreateInventoryDto): Promise<CreateInventoryDto> {
    const newInvtry = this.inventoryRepository.create(invtry)

    return this.inventoryRepository.save(newInvtry)
  }

  findAll(): Promise<Inventory[]> {
    return this.inventoryRepository.find()
  }

  async findInvtryByItem(item: Items): Promise<CreateInventoryDto[]> {
    const itemFound = await this.inventoryRepository.find({ where: { item } })

    if (!itemFound) throw new HttpException('item not found', HttpStatus.NOT_FOUND)

    return itemFound
  }

  async findInvtryById(id: number): Promise<CreateInventoryDto[]> {
    const invtryFound = await this.inventoryRepository.find({ where: { id } })

    if (!invtryFound) throw new HttpException('item not found', HttpStatus.NOT_FOUND)

    return invtryFound;
  }

  async updateInvtry(id: number, updateInvtryDto: UpdateInventoryDto): Promise<UpdateInventoryDto[]> {
    const invtryFound = await this.inventoryRepository.find({
      where: { id }
    })

    if (!invtryFound) throw new HttpException(`Item not found`, HttpStatus.NOT_FOUND)

    const updateInvtry = Object.assign(invtryFound, updateInvtryDto)

    return this.inventoryRepository.save(updateInvtry)
  }

  /* async updateInvtry(inventories: Inventory[], updateDto: UpdateInventoryDto): Promise<Inventory[]> {
      try {
        const updatedInventories = await Promise.all(
          inventories.map(async (inventory) => {
            const updatedInventory = { ...inventory, ...updateDto };
            return await this.inventoryRepository.save(updatedInventory);
          }),
        );
        return updatedInventories;
      } catch (error) {
        throw new HttpException('Failed to update inventories', HttpStatus.BAD_REQUEST);
      }
    } */

  async deleteInvtry(id: number): Promise<DeleteResult> {
    const result: DeleteResult = await this.inventoryRepository.delete({ id })

    if (result.affected === 0) throw new HttpException(`Item not found`, HttpStatus.NOT_FOUND)

    return result;
  }
}
