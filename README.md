# LEARNING TYPESCRIPT

A programming language to address shortcomings of javascript

Install typescript globally -> npm i -g typescript
Compiling a ts file -> tsc filename.ts
Configuring compiler -> tsc --init

# tsconfig.json

## Emit

1. outDir: directory in which compiled files are saved.
2. removeComments: removes comments from the compiled js file.
3. noEmitOnError: doesn't generate compiled js file when there is an error.
4. sourceMap: file that specifies how each line of our typescript code maps to the generated js code.

## Type Checking

1. noUnusedParameters: warns if any parameter of a function is unused.
2. noImplicitReturns: warns if there is any error while returning a value from a function.
3. noUnusedLocals: warns unused variables.

# Debugging

1. create a launch.json file from the debugging section of vscode.
2. add this line in the file -> "preLaunchTask": "tsc: build - tsconfig.json".

# Built-in Types

1. any
2. unknown
3. never
4. enum
5. tuple

if we declare variables without any annotations, it will decide the type of variable by using its assigned value.
if we declare a variable without any value, its type will be any. This type of variable can be first 1 type and then modified into another type.
the typescript compile will infer the type.
