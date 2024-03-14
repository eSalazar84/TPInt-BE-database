import { Inventory } from "src/inventory/entitites/inventory.entity";
import { Invoice } from "src/invoice/entities/invoice.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class InvoicesDetail {
    @PrimaryGeneratedColumn()
    private idInvoicesDetails: number

    @Column({ type: 'int' })
    private amount: number

    @ManyToOne(() => Invoice, invoice => invoice.getIdInvoice)
    private invoices: number

    @ManyToOne(() => Inventory, inventory => inventory.id)
    private inventory: number

    constructor(idIvoicesDetails: number, amount: number) {
        this.idInvoicesDetails = idIvoicesDetails
        this.amount = amount
    }

    public getIdInvoicesDetails(): number { return this.idInvoicesDetails }
    public getAmount(): number { return this.amount }
    public getIdInvoices(): number { return this.invoices }
    public getIdInventory(): number { return this.inventory }

    public setIdInvoicesDetails(idInvoicesDetails: number): number { return this.idInvoicesDetails = idInvoicesDetails }
    public setAmount(amount: number): number { return this.amount = amount }
}

