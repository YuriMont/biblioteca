import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { BookDTO } from '../dto/book.dto';
import { bookErrors } from '../error/book-errors';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  //criar um livro
  async create(data: BookDTO) {
    const bookExists = await this.prisma.book.findFirst({
      where: {
        bar_code: data.bar_code,
      },
    });

    if (bookExists) {
      throw new bookErrors('Livro já cadastrado');
    }

    const book = await this.prisma.book.create({
      data: { ...data },
    });

    return {
      book,
    };
  }

  //listar todos os livros
  async findAll() {
    return this.prisma.book.findMany();
  }

  //alterar algum livro
  async update(id: string, data: BookDTO) {
    const bookExists = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });

    if (!bookExists) {
      throw new bookErrors('Livro não existe');
    }

    return await this.prisma.book.update({
      data,
      where: {
        id,
      },
    });
  }

  //deletar algum livro
  async delete(id: string): Promise<string> {
    const bookExists = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });

    if (bookExists) {
      await this.prisma.book.delete({
        where: {
          id,
        },
      });
      return 'Livro removido com sucesso!';
    }

    throw new bookErrors('Livro não existe');
  }
}
