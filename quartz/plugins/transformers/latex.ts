import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import rehypeMathjax from "rehype-mathjax/svg.js"
import { QuartzTransformerPlugin } from "../types"

interface Options {
  renderEngine: "katex" | "mathjax"
}

export const Latex: QuartzTransformerPlugin<Options> = (opts?: Options) => {
  const engine = opts?.renderEngine ?? "katex"
  return {
    name: "Latex",
    markdownPlugins() {
      return [remarkMath]
    },
    htmlPlugins() {
      if (engine === "katex") {
        return [[rehypeKatex, { output: "html",
			macros: {
				  "\\vb": "\\mathbf{#1}",
				  "\\dd": "\\mathrm{d}",
				  "\\pqty": "{\\left(#1\\right)}",
				  "\\bqty": "{\\left[#1\\right]}",
				  "\\order": "\\mathcal{O}\\pqty{#1}",
				  "\\norm": "\\left\\|{#1}\\right\\|",
				  "\\ds": "\\displaystyle",
				  "\\qand": "\\quad\\mathrm{and}\\quad",
				  "\\pmatrix": "\\begin{pmatrix}#1\\end{pmatrix}",
				  "\\Ham": "\\mathcal{H}",
				  "\\I": "\\mathrm{i}",
				  "\\rewop": "_{\\mathrm{#1}}",
				  "\\power": "^{\\mathrm{#1}}",
				  "\\qq": "\\quad\\text{#1}\\quad",
				  "\\Exp": "\\mathrm{e}^{#1}",
				  "\\pdv": "\\frac{\\partial{#1}}{\\partial{#2}}",
				  "\\INT": "\\int\\limits_{#1}^{#2}",
			},
		}]]
      } else {
        return [rehypeMathjax]
      }
    },
    externalResources() {
      if (engine === "katex") {
        return {
          css: [
            // base css
            "https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css",
          ],
          js: [
            {
              // fix copy behaviour: https://github.com/KaTeX/KaTeX/blob/main/contrib/copy-tex/README.md
              src: "https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/contrib/copy-tex.min.js",
              loadTime: "afterDOMReady",
              contentType: "external",
            },
          ],
        }
      } else {
        return {}
      }
    },
  }
}
