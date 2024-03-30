import { Reporter } from './Summary';

export class ConsoleReporter implements Reporter {
  report(str: string): void {
    console.log(str);
  }
}
