
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class User {
    @PrimaryGeneratedColumn('uuid')
    @Column()
    id: string;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    confirmPassword: string;
    @Column()
    created: Date;
    @Column()
    updated: Date;      
}