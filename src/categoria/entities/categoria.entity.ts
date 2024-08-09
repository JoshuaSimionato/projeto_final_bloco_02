import { IsNotEmpty } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_categoria"})
export class Categoria {

    @PrimaryGeneratedColumn()
    @ApiProperty()    
    id: number;

    @IsNotEmpty()
    @ApiProperty() 
    @Column({length:255, nullable: false})
    tipo: string;

    @OneToMany(() => Produto, (produto) => produto.categoria)
    @ApiProperty() 
    produto: Produto[]

}
