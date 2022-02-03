import { InputType, Int, Field, ID, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreateWishlistInput {
  @Field()
  userId: string;

  @Field()
  url: string;

  @Field()
  title: string;
}


@ObjectType()
export class Wishlist {

  @Field(() => ID)
  userId: string;

  @Field()
  url: string;

  @Field()
  title: string;
}