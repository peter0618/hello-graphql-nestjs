import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from '../../posts/models/post.model';

@ObjectType({ description: '글 작성자' })
export class Author {
  @Field((type) => Int, { description: '글 작성자 아이디' })
  id: number;

  @Field({ nullable: true, description: '이름' })
  firstName?: string;

  @Field({ nullable: true, description: '성' })
  lastName?: string;

  @Field((type) => [Post], { description: '게시글 목록' })
  posts: Post[];
}
