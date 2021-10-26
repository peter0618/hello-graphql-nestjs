import { Injectable, Logger } from '@nestjs/common';
import { Author } from './models/author.model';

@Injectable()
export class AuthorService {
  private readonly logger: Logger = new Logger(this.constructor.name);
  authors: Author[] = [];

  constructor() {
    this.authors.push({
      id: 1,
      firstName: 'Peter',
      lastName: 'Choi',
      posts: [],
    });
    this.authors.push({
      id: 2,
      firstName: 'Grace',
      lastName: 'Kim',
      posts: [],
    });
    this.authors.push({
      id: 3,
      firstName: 'Jongin',
      lastName: 'Koo',
      posts: [],
    });
  }

  findOneById(id: number) {
    this.logger.debug(`findOneById(id: ${JSON.stringify(id)})`);
    return this.authors.filter((author) => author.id === id)[0];
  }

  findAll() {
    this.logger.debug(`findAll()`);
    return this.authors;
  }
}
