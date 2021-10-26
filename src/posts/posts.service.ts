import { Injectable, Logger } from '@nestjs/common';
import { Post } from './models/post.model';

@Injectable()
export class PostsService {
  private readonly logger: Logger = new Logger(this.constructor.name);
  posts: Post[] = [];

  constructor() {
    this.posts.push({
      id: 1,
      title: '피터의 첫번째 글',
      votes: 100,
      createdBy: 1,
    });
    this.posts.push({
      id: 2,
      title: '피터의 두번째 글',
      votes: 2,
      createdBy: 1,
    });
    this.posts.push({
      id: 3,
      title: '종인의 글',
      votes: 200,
      createdBy: 3,
    });
  }

  findAll(param: { authorId: number }) {
    this.logger.debug(`findAll(param: ${JSON.stringify(param)})`);
    return this.posts.filter((post) => post.createdBy === param.authorId);
  }
}
