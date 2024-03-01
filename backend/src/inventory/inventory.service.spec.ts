import { Test, TestingModule } from "@nestjs/testing";
import { InventoryService } from "./inventory.service";
import { CreateInventoryDto } from "./dto/create-inventory.dto";
import { Items } from "../common/enums";
import { UpdateInventoryDto } from "./dto/update-inventory.dto";
import { Inventory } from "./entitites/inventory.entity";

describe('InventoryService', () => {
    let inventoryService: InventoryService;
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [InventoryService]
        }).compile()
        inventoryService = module.get<InventoryService>(InventoryService)
    })

    it('should be defined', () => {
        expect(inventoryService).toBeDefined()
    })

    /* describe('Testing over update', () => {
        //modificar producto
        it('should update an existing item', () => {
            const product: Inventory = {
                id: 1,
                code: 'fer032',
                product: 'martillo de goma',
                description: 'martillo de chipote chillon',
                price: 202566,
                item: Items.Ferretería,
                amount: 201,
                images: './aca_va_fotito',
            };
            const updatedProduct: Inventory = {
                id:1,
                code: 'fer032',
                product: 'martillo de goma',
                description: 'Martillo Actualizado',
                price: 202566,
                item: Items.Ferretería,
                amount: 201,
                images: './aca_va_fotito',
            };
            const result = inventoryService.updateInvtry(product.id, updatedProduct);
            expect(result).toBe('Martillo Actualizado');
        });
        it('should return product not update', () => {
            const updatedProduct: CreateInventoryDto = {
                id: 1,
                code: 'fer032',
                product: 'martillo de goma',
                description: 'martillo de chipote chillon',
                price: 202566,
                item: Items.Ferretería,
                amount: 201,
                images: './aca_va_fotito',
            };
            const result = inventoryService.updateInvtry(updatedProduct.id, updatedProduct);
            expect(result).toBeNull();
        });
    }); */
})