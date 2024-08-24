import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import rehypeMathjax from "rehype-mathjax/svg"
import { QuartzTransformerPlugin } from "../types"

interface Options {
  renderEngine: "katex" | "mathjax"
  customMacros: MacroType
}

interface MacroType {
  [key: string]: string
}

export const Latex: QuartzTransformerPlugin<Partial<Options>> = (opts) => {
  const engine = opts?.renderEngine ?? "katex"
  const macros = opts?.customMacros ?? {}
  return {
    name: "Latex",
    markdownPlugins() {
      return [remarkMath]
    },
    htmlPlugins() {
      if (engine === "katex") {
        return [[rehypeKatex, { output: "html", macros: {
				  "\\vb": "\\mathbf{#1}",
				  "\\dd": "\\mathrm{d}",
				  "\\pqty": "{\\left(#1\\right)}",
				  "\\bqty": "{\\left[#1\\right]}",
				  "\\Bqty": "{\\left\\{#1\\right\\}}",
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
				  "\\tr": "\\mathrm{tr}",
			},
		}]]
      } else {
        return [[rehypeMathjax, { output: "html", macros: {
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
      }
    },
    externalResources() {
      if (engine === "katex") {
        return {
          css: [
            // base css
            "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css",
          ],
          js: [
            {
              // fix copy behaviour: https://github.com/KaTeX/KaTeX/blob/main/contrib/copy-tex/README.md
              src: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/contrib/copy-tex.min.js",
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
