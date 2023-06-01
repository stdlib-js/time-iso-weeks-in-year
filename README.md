<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isoWeeksInYear

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Determine the number of [ISO weeks][iso-week-date] in a year according to the [Gregorian calendar][gregorian-calendar].



<section class="usage">

## Usage

```javascript
import isoWeeksInYear from 'https://cdn.jsdelivr.net/gh/stdlib-js/time-iso-weeks-in-year@esm/index.mjs';
```

#### isoWeeksInYear( \[value] )

Returns the number of [ISO weeks][iso-week-date] in a year according to the [Gregorian calendar][gregorian-calendar].

```javascript
var num = isoWeeksInYear();
// returns <number>
```

By default, the function returns the number of [ISO weeks][iso-week-date] in the current year (according to local time). To determine the number of [ISO weeks][iso-week-date] for a particular year, provide either a year or a [`Date`][date-object] object.

```javascript
var num = isoWeeksInYear( new Date() );
// returns <number>

num = isoWeeksInYear( 2015 );
// returns 53

num = isoWeeksInYear( 2017 );
// returns 52
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import isoWeeksInYear from 'https://cdn.jsdelivr.net/gh/stdlib-js/time-iso-weeks-in-year@esm/index.mjs';

var v;
var i;

for ( i = 0; i < 2021; i++ ) {
    v = isoWeeksInYear( i );
    console.log( 'The year %d has %d ISO weeks.', i, v );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/time-iso-weeks-in-year.svg
[npm-url]: https://npmjs.org/package/@stdlib/time-iso-weeks-in-year

[test-image]: https://github.com/stdlib-js/time-iso-weeks-in-year/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/time-iso-weeks-in-year/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/time-iso-weeks-in-year/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/time-iso-weeks-in-year?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/time-iso-weeks-in-year.svg
[dependencies-url]: https://david-dm.org/stdlib-js/time-iso-weeks-in-year/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/time-iso-weeks-in-year#cli
[cli-url]: https://github.com/stdlib-js/time-iso-weeks-in-year/tree/cli
[@stdlib/time-iso-weeks-in-year]: https://github.com/stdlib-js/time-iso-weeks-in-year/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/time-iso-weeks-in-year/tree/deno
[umd-url]: https://github.com/stdlib-js/time-iso-weeks-in-year/tree/umd
[esm-url]: https://github.com/stdlib-js/time-iso-weeks-in-year/tree/esm
[branches-url]: https://github.com/stdlib-js/time-iso-weeks-in-year/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/time-iso-weeks-in-year/main/LICENSE

[iso-week-date]: https://en.wikipedia.org/wiki/ISO_week_date

[gregorian-calendar]: https://en.wikipedia.org/wiki/Gregorian_calendar

[date-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

</section>

<!-- /.links -->
