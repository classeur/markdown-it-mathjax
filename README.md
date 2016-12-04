# markdown-it-mathjax

[![Build Status](https://img.shields.io/travis/classeur/markdown-it-mathjax/master.svg?style=flat)](https://travis-ci.org/classeur/markdown-it-mathjax)
[![NPM version](https://img.shields.io/npm/v/markdown-it-mathjax.svg?style=flat)](https://www.npmjs.org/package/markdown-it-mathjax)

> [Markdown-it](https://github.com/markdown-it/markdown-it) plugin to bypass LaTeX math for mathjax processing.

Processes TeX displayed math

`$$1 *2* 3$$` => `\[1 *2* 3\]`

Processes TeX in-line math

`$1 *2* 3$` => `\(1 *2* 3\)`

Skips in-line math if numbers are around (according to [pandoc math](http://pandoc.org/README.html#math))

`$1 *2* 3$5` => `$1 <em>2</em> 3$5`

Also processes LaTeX delimiters (double backslashed)

`\\(1 *2* 3\\)` => `\(1 *2* 3\)`

`\\[1 *2* 3\\]` => `\[1 *2* 3\]`

And sections

`\begin{abc}1 *2* 3\end{abc}` => `\begin{abc}1 *2* 3\end{abc}`


## Install

```bash
npm install markdown-it-mathjax --save
```

## Use

```js
var md = require('markdown-it')()
            .use(require('markdown-it-mathjax')());

md.render('$1 *2* 3$') // => '<p>\(1 *2* 3\)</p>'
```

_Differences in browser._ If you load script directly into the page, without
package system, module will add itself globally as `window.markdownitMathjax`.


## License

[MIT](https://github.com/classeur/markdown-it-mathjax/blob/master/LICENSE)
