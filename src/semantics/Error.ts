export class SemanticError extends Error {
  token: string;
  lineNumber: number;
  constructor(message: string, token: string, lineNumber: number) {
    super(`Line ${lineNumber}: ${message} in ${token}`);
    this.token = token;
  }

  toString() {
    return `Line ${this.lineNumber}: ${this.message} at ${this.token}`;
  }
}
