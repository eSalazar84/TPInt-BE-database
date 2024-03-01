import { Module } from '@nestjs/common';
import { InventoryModule } from './inventory/inventory.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'agrotech',
      entities: [
        __dirname + '/**/*.entity{.ts,.js}'
      ],
      synchronize: true
    }),
    InventoryModule]
})
export class AppModule { }
