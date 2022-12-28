import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookDTO } from '../dto/book.dto';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() data: BookDTO){
    return this.booksService.create(data);
  }

  @Get()
  async findAll(){
    return this.booksService.findAll();
  }

  @Put(":id")
  async uptade(@Param("id") id: string, @Body() data: BookDTO){
    return this.booksService.update(id, data);
  }

  @Delete(":id")
  async delete(@Param("id") id: string){
    return this.booksService.delete(id);
  }
}
