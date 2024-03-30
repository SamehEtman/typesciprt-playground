import { parseDate } from '../utils/parseDate';
import { Reader } from './CSVReader';
import { MatchResults } from 'src/MatchResults';
import { MatchType } from '../matchType';

export class MatchReader {
  matches: MatchType[] = [];
  constructor(public reader: Reader) {}
  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row) => {
      return [
        parseDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResults,
        row[6],
      ];
    });
  }
}
