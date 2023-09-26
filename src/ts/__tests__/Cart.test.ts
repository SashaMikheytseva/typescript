import Cart from "../service/Cart";
import Movie from "../domain/Movie";
import Book from "../domain/Book";
import MusicAlbum from "../domain/MusicAlbum";

test('new card should be empty', () => {
    const cart = new Cart();
  
    expect(cart.items.length).toBe(0);
});

test('adding movie to the cart', () => {
    const cart = new Cart();
    cart.add(new Movie(1009, 'The Avengers', 2012, true, 'USA', 'Avengers Assemble!', ['science fiction', 'action', 'fantasy', 'adventure'], '137 min / 02:17', 2000));
    expect(cart.items.length).toBe(1);
});

test('getting items from the cart', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    const result = [
        {id: 1001, name: 'War and Piece', author: 'Leo Tolstoy', price: 2000, pages: 1225}, 
        {id: 1008, name: 'Meteora', author: 'Linkin Park', price: 900}
    ];

    expect(cart.items).toEqual(result);
});

test('sumTotal', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    expect(cart.sumTotal()).toBe(2900);
});

test('sumWithDiscount', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    
    expect(cart.sumWithDiscount(10)).toBe(1800);
});

test('delete item from the cart', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.deleteItem(1001);
    expect(cart.items).toEqual([{id: 1008, name: 'Meteora', author: 'Linkin Park', price: 900}]);
});

