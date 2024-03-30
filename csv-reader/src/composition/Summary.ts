import { MatchType } from '../matchType';

export interface Analyzer {
  analyze(matches: MatchType[]): string;
}

export interface Reporter {
  report(str: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public reporter: Reporter) {}
  analyzeAndReport(matches: MatchType[]): void {
    const analysisResult = this.analyzer.analyze(matches);
    this.reporter.report(analysisResult);
  }
}
