
import { Column, Entity, PrimaryColumn,} from "typeorm";

@Entity()

export class Task {
    @PrimaryColumn('uuid') uuid: string
    @Column()
    id:string;
    @Column()
    created: boolean;
    @Column()
    updated: Date;
    @Column()
    finished:boolean;    
}