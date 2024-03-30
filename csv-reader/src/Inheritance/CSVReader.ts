import fs from 'fs';

export abstract class CSVReader<T> {
  data: T[] = [];
  constructor(public filename: string) {}
  abstract parseRow(row: string[]): T;
  read(): void {
    const csvFile = fs.readFileSync(this.filename, {
      encoding: 'utf-8',
    });
    const fileRows = csvFile.split('\n').map((rowText) => {
      return rowText.split(',');
    });
    this.data = fileRows.map(this.parseRow);
  }
}
