declare module 'markdown-it-mathjax' {
  import MarkdownIt from 'markdown-it/lib'
  export interface MathJaxOptions {
    beforeMath: string,
    afterMath: string,
    beforeInlineMath: string,
    afterInlineMath: string,
    beforeDisplayMath: string,
    afterDisplayMath: string
  }
  const markdownItMathJax: (MathJaxOptions) => MarkdownIt.PluginSimple
  export = markdownItMathJax
}
