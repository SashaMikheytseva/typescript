import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sumTotal(): number {
        return this._items.reduce((acc: number, item: Buyable) => acc + item.price, 0);
    }

    sumWithDiscount(dicount: number): number {
        let total = this.sumTotal();
        return total - (total * dicount / 100);
    }

    deleteItem(id: number): void {
       this._items = this._items.filter((item: Buyable) => item.id !== id); 
    }
}