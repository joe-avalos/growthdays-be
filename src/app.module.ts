import { Module } from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CatController} from "./cat.controller";
import {CatService} from "./cat.service";
import {Cat} from "./cat.model";
import {CatModule} from "./cat.module";
require('dotenv').config()

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    models:[Cat]
  }), CatModule],
  controllers: [AppController, CatController],
  providers: [AppService, CatService],
})
export class AppModule {}
