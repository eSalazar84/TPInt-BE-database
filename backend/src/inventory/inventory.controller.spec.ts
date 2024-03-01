import { Test, TestingModule } from '@nestjs/testing';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { Inventory } from './entitites/inventory.entity';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { Items } from '../common/enums';

describe('InventoryController', () => {
    let controller: InventoryController;
    let service: InventoryService;

    let mockedInventoryValue = InventoryService;
    let mockInventoryService = {
        inventory: () => mockedInventoryValue,
    };
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [InventoryController],
            providers: [InventoryService],
        })
            .overrideProvider(InventoryService)
            .useValue(mockInventoryService)
            .compile();
        controller = module.get<InventoryController>(InventoryController);
        service = module.get<InventoryService>(InventoryService);
    })

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    

});
