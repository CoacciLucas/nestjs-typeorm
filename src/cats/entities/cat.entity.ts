import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Cat'})
export class Cat {
    @PrimaryColumn({type: 'text'})
    id: string;

    @Column({unique: true})
    name: string;

    @Column({type: 'text'})
    color: string;
}
