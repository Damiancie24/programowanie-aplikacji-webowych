export class LocStorage{
re

    getData(): any{
        const rawData = localStorage.getItem('data');
        return JSON.parse(rawData);
    }
    setData(data: any): void{
        const processedData = JSON.stringify(data);
        localStorage.setItem('data', processedData);
    }


}