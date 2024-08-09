import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm/dist/typeorm.module";
import { CategoriaController } from "./controllers/categoria.controller";
import { Categoria } from "./entities/categoria.entity";
import { CategoriaService } from "./services/categoria.service";


@Module({
    imports: [TypeOrmModule.forFeature([Categoria])],
    providers: [CategoriaService],
    controllers: [CategoriaController],
    exports: [TypeOrmModule]
})
export class CategoriaModule {}
