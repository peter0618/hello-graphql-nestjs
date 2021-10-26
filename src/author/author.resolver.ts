import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Author } from './models/author.model';
import { AuthorService } from './author.service';
import { PostsService } from '../posts/posts.service';

@Resolver(Author)
export class AuthorResolver {
  constructor(
    private authorService: AuthorService,
    private postsService: PostsService,
  ) {}

  @Query(() => Author, { name: 'author' })
  async getAuthor(@Args('id', { type: () => Int }) id: number) {
    return this.authorService.findOneById(id);
  }

  @Query(() => [Author], { name: 'authors' })
  async getAuthors() {
    return this.authorService.findAll();
  }

  @ResolveField()
  async posts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }
}
