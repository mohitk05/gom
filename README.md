# The Gom Programming Language

Gom is an evolving language.

## Grammar

Gom uses ANTLR4 to generate its parser and the grammar is present in `Gom.g4`. Language features are evolving and they may be added or removed.

An example program is in `src/test.gom`, looks as follows:

```
import io;

let five = 5;
let ten = 10;

fn add(x: int, y: int): int {
    return x + y;
}

fn main(): int {
    let result = add(five, ten);
    io.log_star("Start");
    io.log("Sum " + toString(result));
    io.log_star("End");
    return 0;
}

main();
```

## Development

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

To run the test program in `test.gom`, run

```bash
bun run src/index.ts src/test.gom
```
