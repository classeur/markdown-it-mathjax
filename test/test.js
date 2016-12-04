/* global describe, it */
require('should')
var markdownIt = require('markdown-it')
var md = markdownIt()
var markdownitMathjax = require('..')
md.use(markdownitMathjax())

describe('Tex in-line math', function () {
  it('should work properly', function () {
    md.render('$1 *2* 3$').should.eql('<p>\\(1 *2* 3\\)</p>\n')
  })
  it('should not be processed if space after first marker', function () {
    md.render('$ 1 *2* 3$').should.eql('<p>$ 1 <em>2</em> 3$</p>\n')
  })
  it('should not be processed if space before second marker', function () {
    md.render('$1 *2* 3 $').should.eql('<p>$1 <em>2</em> 3 $</p>\n')
  })
  it('should not be processed if number around', function () {
    md.render('$1 *2* 3$5').should.eql('<p>$1 <em>2</em> 3$5</p>\n')
  })
})

describe('Tex displayed math', function () {
  it('should work properly', function () {
    md.render('$$1 *2* 3$$').should.eql('<p>\\[1 *2* 3\\]</p>\n')
  })
  it('should work properly with more than 2 dollar signs', function () {
    md.render('$$$1 *2* 3$$$').should.eql('<p>$\\[1 *2* 3\\]$</p>\n')
  })
})

describe('LaTeX in-line math', function () {
  it('should work properly', function () {
    md.render('\\\\(1 *2* 3\\\\)').should.eql('<p>\\(1 *2* 3\\)</p>\n')
  })
})

describe('LaTeX displayed math', function () {
  it('should work properly', function () {
    md.render('\\\\[1 *2* 3\\\\]').should.eql('<p>\\[1 *2* 3\\]</p>\n')
  })
})

describe('LaTeX section', function () {
  it('should work properly', function () {
    md.render('\\begin{section}1 *2* 3\\end{section}').should.eql('<p>\\begin{section}1 *2* 3\\end{section}</p>\n')
  })
})

describe('Custom wrapping', function () {
  var md = markdownIt()
  md.use(markdownitMathjax({
    beforeMath: '<span>',
    afterMath: '</span>'
  }))

  it('should work properly', function () {
    md.render('\\begin{section}1 *2* 3\\end{section}').should.eql('<p><span>\\begin{section}1 *2* 3\\end{section}</span></p>\n')
  })
})
