import { IsNotEmpty } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: "tb_categoria"})
export class Categoria {

    @PrimaryGeneratedColumn()   
    id: number;

    @IsNotEmpty()
    @Column({length:255, nullable: false})
    tipo: string;

}