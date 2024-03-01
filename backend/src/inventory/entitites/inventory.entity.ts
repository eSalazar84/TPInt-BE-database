import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Items } from '../../common/enums';


@Entity()
export class Inventory {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    code: string

    @Column()
    product: string

    @Column()
    description: string

    @Column()
    price: number

    @Column({ enum: 'string' })
    item: Items

    @Column()
    amount: number

    @Column()
    images: string
}
