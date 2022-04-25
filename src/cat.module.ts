import {Module} from "@nestjs/common";
import {CatService} from "./cat.service";
import {CatController} from "./cat.controller";
import {SequelizeModule} from "@nestjs/sequelize";
import {Cat} from "./cat.model";


@Module({
    imports: [SequelizeModule.forFeature([Cat])],
    controllers: [CatController],
    providers: [
        CatService
    ],
    exports: [SequelizeModule]
})
export class CatModule {}