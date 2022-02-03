import { Module } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { WishlistResolver } from './wishlist.resolver';
import { WishlistSchema } from './schema/wishlist.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature(({name: 'Wishlist', schema: WishlistSchema}))],
  providers: [WishlistResolver, WishlistService]
})
export class WishlistModule {}
