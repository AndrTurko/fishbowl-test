export function parseCsvLine(line: string): string[] {
  return line.split(/","/).map(str => str.replace(/"/g, ''));
}
