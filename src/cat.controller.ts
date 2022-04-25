import {Controller, Get, HttpStatus, Req, Res} from "@nestjs/common";
import {CatService} from "./cat.service";
import {Response} from "express";


@Controller('cat')
export class CatController {
    constructor(private readonly catService: CatService) {
    }

    @Get()
    async findAll(@Res() res: Response) {
        const cats = await this.catService.findAll()
        res.status(HttpStatus.OK).json(cats)
    }
}