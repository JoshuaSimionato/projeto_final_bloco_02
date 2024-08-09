import { IsNotEmpty, IsNumber } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";



@Entity({ name: "tb_produto" }) // Criando a tabela 
export class Produto {

    @PrimaryGeneratedColumn() // Chave primária AUTOINCREMENT
    id: number;

    @IsNotEmpty() // Não aceitar nome vazio
    @Column({ length: 100, nullable: false }) // Definir o tamanho e não aceitar o valor nulo
    nome: string;

    @IsNumber() // Valida se é um número inteiro
    @IsNotEmpty() // Não aceitar valor vazio
    @Column({ type: "int", nullable: false }) // Definir o tipo e não aceitar valor nulo
    quantidade: number;

    @IsNumber({ maxDecimalPlaces: 2 }) // Valida se é um número com até 2 casas decimais
    @IsNotEmpty() // Não aceitar valor vazio
    @Column({ type: "decimal", precision: 10, scale: 2 }) // Definir o tipo e tamanho
    preco: number;

    @Column()
    foto: string;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: 'CASCADE',
      })
    categoria: Categoria
}
