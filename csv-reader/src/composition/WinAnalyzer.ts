import { MatchType } from '../matchType';
import { Analyzer } from './Summary';
import { MatchResults } from '../MatchResults';

export class WinAnalyzer implements Analyzer {
  constructor(public teamName: string) {}
  analyze(matches: MatchType[]): string {
    let winCounts = 0;
    matches.forEach((match) => {
      if (
        (this.teamName === match[1] && match[5] === MatchResults.HomeWin) ||
        (this.teamName === match[2] && match[5] === MatchResults.AwayWin)
      ) {
        winCounts++;
      }
    });

    return `${this.teamName} won ${winCounts} Matches`;
  }
}
