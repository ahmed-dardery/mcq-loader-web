# MCQ Loader

## Usage

## Data Format

### Preparing data
The loader takes questions data as a javascript-object / json format, if you have your questions in the following format:
```Question 1
Correct Answer
Incorrect Answer 1
Incorrect Answer 2
...
Incorrect Answer n

Question 2
Correct Answer
Incorrect Answer 1
Incorrect Answer 2
...
Incorrect Answer m
```

You may use the following regex to quickly transform it into the proper format:
* `^.+$` -> `"$0",`
* `(?:\n|^)(".*",)\n((?:"[^"]*",\n)+)\n` -> `{text: $1\noptions: [$2]},\n`

For true and false questions, you may use:
* `(.*)\n(true|false)` -> `{text: "$1",\nans: $2},`
