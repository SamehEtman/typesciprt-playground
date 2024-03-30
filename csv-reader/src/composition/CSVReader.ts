import fs from 'fs';

export interface Reader {
  data: string[][];
  read(): void;
}

export class CSVReader implements Reader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    const csvFile = fs.readFileSync(this.filename, {
      encoding: 'utf-8',
    });
    const fileRows = csvFile.split('\n').map((rowText) => {
      return rowText.split(',');
    });
    this.data = fileRows;
  }
}
