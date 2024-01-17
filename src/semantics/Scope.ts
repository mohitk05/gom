import { FunctionDeclContext } from "../antlr/GomParser";

export type ExpressionResult = number | string | boolean | null;
export type GomVariable = { type: string; value: ExpressionResult };
export type GomFunction = { ctx: FunctionDeclContext };

export class Scope {
  parent: Scope;
  variables: Map<string, GomVariable>;
  functions: Map<string, GomFunction>;

  constructor(parent: Scope = null) {
    this.parent = parent;
    this.variables = new Map();
    this.functions = new Map();
  }
  addVariable(
    name: string,
    type: string = "default",
    value: ExpressionResult = null
  ): void {
    this.variables.set(name, { type, value });
  }
  getVariable(name: string): { type: string; value: ExpressionResult } {
    if (this.variables.has(name)) {
      return this.variables.get(name);
    } else if (this.parent) {
      return this.parent.getVariable(name);
    } else {
      return null;
    }
  }
  setVariable(name: string, value: ExpressionResult): void {
    if (this.variables.has(name)) {
      this.variables.get(name).value = value;
    } else if (this.parent) {
      this.parent.setVariable(name, value);
    } else {
      return null;
    }
  }
  addFunction(name: string, ctx: FunctionDeclContext): void {
    this.functions.set(name, { ctx });
  }
  getFunction(name: string): { ctx: FunctionDeclContext } {
    if (this.functions.has(name)) {
      return this.functions.get(name);
    } else if (this.parent) {
      return this.parent.getFunction(name);
    } else {
      return null;
    }
  }
}
