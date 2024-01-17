export class SemanticError extends Error {
  token: string;
  lineNumber: number;
  constructor(message: string, token: string, lineNumber: number) {
    super(message);
    this.token = token;
  }

  toString() {
    return `Line ${this.lineNumber}: ${this.message} at ${this.token}`;
  }
}
