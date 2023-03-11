import { Injectable } from '@nestjs/common';
import { Item } from './item.model';
import { ItemStatus } from './item-status.enum';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  findAll() {
    return this.items;
  }

  findById(_id: string): Item {
    return this.items.find(({ id }) => id === _id);
  }

  create(item: Item): Item {
    this.items.push(item);
    return item;
  }

  updateStatus(_id: string): Item {
    const item = this.items.find(({ id }) => id === _id);
    item.status = ItemStatus.SOLD_OUT;
    return item;
  }

  delete(_id: string) {
    this.items = this.items.filter(({ id }) => {
      id !== _id;
    });
  }
}
