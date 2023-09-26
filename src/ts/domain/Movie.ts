import Buyable from "./Buyable";

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly year: number, 
        readonly imax: boolean, 
        readonly country: string, 
        readonly slogan: string, 
        readonly genre: string[], 
        readonly runtime: string | number,
        readonly price: number
    ) { }
}
