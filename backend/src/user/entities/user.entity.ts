import { Rol } from "../../common/enums";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    private idUser: number

    @Column({ unique: true })
    private username: string;

    @Column({ type: 'varchar' })
    private name: string;

    @Column({ type: 'varchar' })
    private lastName: string

    @Column({ type: 'varchar', unique: true })
    private email: string;

    @Column({ type: 'varchar' })
    private password: string;

    @Column({ type: 'enum', enum: Rol, default: Rol.USER })
    private rol: Rol;

    @Column({ default: true })
    private active: boolean;

    @Column({ type: 'int' })
    private phone: number;

    @Column({ nullable: true })
    private birthDate: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    private createdAt: Date

    constructor(idUser: number, username: string, name: string, lastName: string,
        email: string, password: string, rol: Rol, active: boolean,
        phone: number, birthDate: Date, createdAt: Date) {
        this.idUser = idUser,
            this.username = username,
            this.name = name,
            this.lastName = lastName,
            this.email = email,
            this.password = password,
            this.rol = rol,
            this.active = active,
            this.phone = phone,
            this.birthDate = birthDate,
            this.createdAt = createdAt
    }

    public getIdUser(): number { return this.idUser }
    public getUserName(): string { return this.username }
    public getName(): string { return this.name }
    public getLastName(): string { return this.lastName }
    public getEmail(): string { return this.email }
    public getPassword(): string { return this.password }
    public getRol(): Rol { return this.rol }
    public getActive(): boolean { return this.active }
    public getPhone(): number { return this.phone }
    public getBirthDate(): Date { return this.birthDate }
    public getCreatedAt(): Date { return this.createdAt }

    public setIdUser(idUser: number): number { return this.idUser = idUser }
    public setUserName(username: string): string { return this.username = username }
    public setName(name: string): string { return this.name = name }
    public setLastName(lastName: string): string { return this.lastName = lastName }
    public setEmail(email: string): string { return this.email = email }
    public setPassword(password: string): string { return this.password = password }
    public setRol(rol: Rol): Rol { return this.rol = rol }
    public setActive(active: boolean): boolean { return this.active = active }
    public setPhone(phone: number): number { return this.phone = phone }
    public setBirthDate(birthDate: Date): Date { return this.birthDate = birthDate }
    public setCreatedAt(createdAt: Date): Date { return this.createdAt = createdAt }

}
