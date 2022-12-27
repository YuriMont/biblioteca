import { Module } from '@nestjs/common';
import { ModuleModule } from './books/module/books.module';

@Module({
  imports: [ModuleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
