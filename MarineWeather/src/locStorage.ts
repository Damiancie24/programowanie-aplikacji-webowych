export class LocStorage {
    readonly key = 'data';

    getData(): any {
        const rawData = localStorage.getItem(this.key);
        return JSON.parse(rawData);
    }

    setData(data: any): void {
        const processedData = JSON.stringify(data);
        localStorage.setItem(this.key, processedData);
    }

}