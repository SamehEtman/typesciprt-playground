import fs from 'fs';
import { MatchType } from './matchType';
import { parseDate } from './utils/parseDate';
import { MatchResults } from './MatchResults';

export class CSVReader {
  data: string[][] = [];
  constructor(public filename: string) {}

  read(): string[][] {
    const csvFile = fs.readFileSync(this.filename, {
      encoding: 'utf-8',
    });
    const fileRows = csvFile.split('\n').map((rowText) => {
      return rowText.split(',');
    });
    this.data = fileRows;
    console.log(fileRows[0]);
    return fileRows;
  }

  parseRow(row: string[]): MatchType {
    return [
      parseDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResults,
      row[6],
    ];
  }
}
