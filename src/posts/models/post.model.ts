import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Author 가 게시한 글' })
export class Post {
  @Field((type) => Int, { description: '게시물 아이디' })
  id: number;

  @Field({ description: '글 제목' })
  title: string;

  @Field((type) => Int, { nullable: true, description: '좋아요' })
  votes?: number;

  @Field(() => Int, { description: '게시자 아이디' })
  createdBy: number;
}
