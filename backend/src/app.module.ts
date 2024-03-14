import { Module } from '@nestjs/common';
import { InventoryModule } from './inventory/inventory.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { InvoiceModule } from './invoice/invoice.module';
import { InvoicesDetailsModule } from './invoices-details/invoices-details.module';

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
    InventoryModule,
    UserModule,
    InvoiceModule,
    InvoicesDetailsModule,
  ],
  providers: []
})
export class AppModule { }
