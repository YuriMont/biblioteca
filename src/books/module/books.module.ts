import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { ModuleController } from './books.controller';

@Module({
  controllers: [ModuleController],
  providers: [BooksService]
})
export class ModuleModule {}
