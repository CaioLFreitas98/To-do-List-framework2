
import { Column, Entity, PrimaryColumn} from "typeorm";

@Entity()

export class User {
    @PrimaryColumn('uuid')  uuid: string;
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