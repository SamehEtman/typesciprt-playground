import { CSVReader } from './composition/CSVReader';
import { ConsoleReporter } from './composition/ConsoleReporter';
import { MatchReader } from './composition/MatchReader';
import { Summary } from './composition/Summary';
import { WinAnalyzer } from './composition/WinAnalyzer';

const csvReader = new CSVReader('football.csv');

const matchReader = new MatchReader(csvReader);

matchReader.load();

const summary = new Summary(
  new WinAnalyzer('Man United'),
  new ConsoleReporter(),
);

summary.analyzeAndReport(matchReader.matches);

