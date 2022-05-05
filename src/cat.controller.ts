import {Controller, Get, HttpStatus, Post, Body, Res} from "@nestjs/common";
import {CatService} from "./cat.service";
import {Response} from "express";
import {CreateCatDto} from "./create-cat.dto";


@Controller('cat')
export class CatController {
    constructor(private readonly catService: CatService) {
    }

    @Get()
    async findAll(@Res() res: Response) {
        const cats = await this.catService.findAll()
        res.status(HttpStatus.OK).json(cats)
    }

    @Post()
    async addCat(@Body() createCatDto: CreateCatDto, @Res() res: Response) {
        await this.catService.create(createCatDto)
        const cats = await this.catService.findAll()
        res.status(HttpStatus.OK).json(cats)
    }
}