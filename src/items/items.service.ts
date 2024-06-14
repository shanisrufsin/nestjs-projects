import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './interfaces/item.interface';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find().exec();
  }

  async findOne(id: string): Promise<Item> {
    const item = await this.itemModel.findById(id).exec();
    if (!item) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    return item;
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const createdItem = new this.itemModel(createItemDto);
    return await createdItem.save();
  }

  async update(id: string, createItemDto: CreateItemDto): Promise<Item> {
    const updatedItem = await this.itemModel.findByIdAndUpdate(id, createItemDto, { new: true }).exec();
    if (!updatedItem) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    return updatedItem;
  }

  async delete(id: string): Promise<Item> {
    const deletedItem = await this.itemModel.findByIdAndDelete(id).exec();
    if (!deletedItem) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    return deletedItem;
  }
}
