export class NewCity {
    city: string;
    newCityHandler: (city: string) => void;
    constructor(handler: (city: string) => void) {
        this.handleAddCity();
        this.newCityHandler = handler;
    }
    handleAddCity(): void {
        document.querySelector('#cityAddBtn').addEventListener('click', () => {
            // this.city = (document.querySelector('#cityname') as HTMLInputElement).value;
            this.city = (document.querySelector<HTMLInputElement>('#cityname')).value;
            this.newCityHandler(this.city);
        });
    }
}
