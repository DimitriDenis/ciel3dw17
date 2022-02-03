import { Injectable } from '@nestjs/common';
import { CreateWishlistInput } from './dto/create-wishlist.input';
import { UpdateWishlistInput } from './dto/update-wishlist.input';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wishlist } from './schema/wishlist.schema';

@Injectable()
export class WishlistService {

constructor(@InjectModel('Wishlist') private readonly wishlistModel: Model<Wishlist>){}

  async create(createWishlistInput: CreateWishlistInput): Promise <Wishlist> {
    const newWishlist = await new this.wishlistModel(createWishlistInput);
    return newWishlist.save();
  }

   async findAll(): Promise <Wishlist> {
    return this.wishlistModel.find().exec();
  }

  async findOne(id: string) {
    return this.wishlistModel.findOne().exec();
  }

  update(id: string, updateWishlistInput: UpdateWishlistInput) {
    return `This action updates a #${id} wishlist`;
  }

  remove(id: string) {
    return this.wishlistModel.findOneAndRemove().exec();
  }
}
