import {Injectable} from "@nestjs/common";
import {Cat} from "./cat.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateCatDto} from "./create-cat.dto";


@Injectable()
export class CatService {
    constructor(
        @InjectModel(Cat)
        private catModel: typeof Cat
    ) {}

    async findAll(): Promise<Cat[]> {
        return this.catModel.findAll<Cat>()
    }

    async create(cat: any): Promise<void> {
        await this.catModel.create<Cat>(cat)
    }
}