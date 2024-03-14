import { User } from "src/user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, ManyToOne } from "typeorm";

@Entity()
export class Invoice {
    @PrimaryGeneratedColumn()
    private idInvoice: number

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    private invoiceDate: Date

    @Column({ type: 'int' })
    private total_without_iva: number

    @Column({ type: 'double' })
    private iva: number

    @BeforeInsert()
    @BeforeUpdate()
    @Column({ type: 'int' })
    private total_with_iva(): number {
        return this.total_without_iva * this.iva
    }

    /* 
    @ManyToOne(()=> User, user => user.post)
    author: User
    */
    @ManyToOne(() => User, user => user.getIdUser)
    private user: number

    constructor(idInvoice: number, invoiceDate: Date, total_without_iva: number, iva: number) {
        this.idInvoice = idInvoice
        this.invoiceDate = invoiceDate
        this.total_without_iva = total_without_iva
        this.iva = iva
    }

    public getIdInvoice(): number { return this.idInvoice }
    public getInvoiceDate(): Date { return this.invoiceDate }
    public getTotalWithoutIva(): number { return this.total_without_iva }
    public getIva(): number { return this.iva }
    public getTotalWithIva(): number { return this.total_with_iva() }
    public getUser(): number { return this.user }

    public setIdInvoice(idInvoice: number): number { return this.idInvoice = idInvoice }
    public setInvoiceDate(invoiceDate: Date): Date { return this.invoiceDate = invoiceDate }
    public setTotalWithoutIva(total_without_iva: number): number { return this.total_without_iva = total_without_iva }
    public setIva(iva: number): number { return this.iva = iva }
    public setTotalWithIva(): number { return this.total_with_iva() }
}
