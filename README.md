# only-truthy

![build](https://github.com/jonyonson/only-truthy/actions/workflows/main.yml/badge.svg)

Returns a new object with ALL object properties with [falsy values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) removed.
## Install
```sh
npm install only-truthy
```

## Usage

```js
import onlyTruthy from 'only-truthy';

const obj = onlyTruthy({
  a: true,
  b: false,
  c: null,
  d: undefined,
  e: NaN,
  f: '',
  g: 0,
});

console.log(obj);
// => { a: true };
```
