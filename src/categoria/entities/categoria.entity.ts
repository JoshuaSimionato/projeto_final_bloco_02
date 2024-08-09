import { IsNotEmpty } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";

@Entity({name: "tb_categoria"})
export class Categoria {

    @PrimaryGeneratedColumn()   
    id: number;

    @IsNotEmpty()
    @Column({length:255, nullable: false})
    tipo: string;

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produto: Produto[]

}
