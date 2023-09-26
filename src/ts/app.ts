import Book from "./domain/Book";
import MusicAlbum from "./domain/MusicAlbum";
import Movie from "./domain/Movie";
import Cart from "./service/Cart";

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1009, 'The Avengers', 2012, true, 'USA', 'Avengers Assemble!', ['science fiction', 'action', 'fantasy', 'adventure'], '137 min / 02:17', 2000));

console.log(cart.items);