import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_farmacia',
      entities: [],
      synchronize: true,
      // logging: true,
      // bigNumberStrings: false, // Permite usar o Bigint
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
