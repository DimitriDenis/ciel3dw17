import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WishlistService } from './wishlist.service';
import { Wishlist } from './schema/wishlist.schema';
import { CreateWishlistInput } from './dto/create-wishlist.input';
import { UpdateWishlistInput } from './dto/update-wishlist.input';

@Resolver(() => Wishlist)
export class WishlistResolver {
  constructor(private readonly wishlistService: WishlistService) {}

  @Mutation(() => Wishlist)
  createWishlist(@Args('createWishlistInput') createWishlistInput: CreateWishlistInput) {
    return this.wishlistService.create(createWishlistInput);
  }

  @Query(() => [Wishlist], { name: 'wishlist' })
  findAll() {
    return this.wishlistService.findAll();
  }

  @Query(() => Wishlist, { name: 'wishlist' })
  findOne(@Args('id', { type: () => Int }) userId: string) {
    return this.wishlistService.findOne(userId);
  }

  @Mutation(() => Wishlist)
  updateWishlist(@Args('updateWishlistInput') updateWishlistInput: UpdateWishlistInput) {
    return this.wishlistService.update(updateWishlistInput.userId, updateWishlistInput);
  }

  @Mutation(() => Wishlist)
  removeWishlist(@Args('id', { type: () => String }) userId: string) {
    return this.wishlistService.remove(userId);
  }
}
