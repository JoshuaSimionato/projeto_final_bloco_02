import { IsNotEmpty, IsNumber } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { ApiProperty } from "@nestjs/swagger";



@Entity({ name: "tb_produto" }) // Criando a tabela 
export class Produto {

    @PrimaryGeneratedColumn() // Chave primária AUTOINCREMENT
    @ApiProperty()   
    id: number;

    @IsNotEmpty() // Não aceitar nome vazio
    @Column({ length: 100, nullable: false }) // Definir o tamanho e não aceitar o valor nulo
    @ApiProperty()   
    nome: string;

    @IsNumber() // Valida se é um número inteiro
    @IsNotEmpty() // Não aceitar valor vazio
    @Column({ type: "int", nullable: false }) // Definir o tipo e não aceitar valor nulo
    @ApiProperty()   
    quantidade: number;

    @IsNumber({ maxDecimalPlaces: 2 }) // Valida se é um número com até 2 casas decimais
    @IsNotEmpty() // Não aceitar valor vazio
    @Column({ type: "decimal", precision: 10, scale: 2 }) // Definir o tipo e tamanho
    @ApiProperty()   
    preco: number;

    @Column()
    @ApiProperty()   
    foto: string;

    @ApiProperty({type:() => Categoria}) // Relacionamento com a tabela Categoria
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: 'CASCADE',
      })
    categoria: Categoria
}
