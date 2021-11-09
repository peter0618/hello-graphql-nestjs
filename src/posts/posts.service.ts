import { Injectable, Logger } from '@nestjs/common';
import { Post } from './models/post.model';
import * as DataLoader from 'dataloader';

@Injectable()
export class PostsService {
  private readonly logger: Logger = new Logger(this.constructor.name);
  posts: Post[] = [];
  private dataLoaderPost;

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
    this.posts.push({
      id: 4,
      title: '종인의 글2',
      votes: 10,
      createdBy: 3,
    });

    this.dataLoaderPost = new DataLoader<number, Post[]>(
      (userIds: readonly number[]) => {
        return this.findPostByUserIds(userIds);
      },
      {
        cache: false,
      },
    );
  }

  findAll(param: { authorId: number }) {
    // this.logger.debug(`findAll(param: ${JSON.stringify(param)})`);
    // return this.posts.filter((post) => post.createdBy === param.authorId);
    return this.dataLoaderPost.load(param.authorId);
  }

  async findPostByUserIds(userIds: readonly number[]): Promise<Post[][]> {
    this.logger.debug(`findPostByUserIds(userIds: ${JSON.stringify(userIds)})`);
    const rs = userIds.map((userId) =>
      this.posts.filter((post) => post.createdBy === userId),
    );
    this.logger.debug(JSON.stringify(rs));
    return rs;
  }
}
