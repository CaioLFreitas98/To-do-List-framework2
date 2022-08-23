
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Task {
    @PrimaryGeneratedColumn('uuid')
    @Column()
    id:string;
    @Column()
    created: boolean;
    @Column()
    updated: string;
    @Column()
    finished:boolean;    
}