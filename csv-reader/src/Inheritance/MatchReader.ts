import { MatchResults } from '../MatchResults';
import { CSVReader } from './CSVReader';
import { MatchType } from '../matchType';
import { parseDate } from '../utils/parseDate';

export class MatchReader extends CSVReader<MatchType> {
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
