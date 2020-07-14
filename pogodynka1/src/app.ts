import { newCity } from "./newCity";

import { NewCity } from "./newCity";

export class App {
    newCity: NewCity;
    constructor() {
        this.start();
    }

    start(): void{
        this.newCity = new newCity();
    }
}