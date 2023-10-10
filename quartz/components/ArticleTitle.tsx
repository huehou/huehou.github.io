import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function ArticleTitle({ fileData }: QuartzComponentProps) {
  const title = fileData.frontmatter?.title
  const reference = fileData.frontmatter?.reference
  const author = fileData.frontmatter?.author
  if (title) {
    if (author) {
      return <h1>{title}</h1><br><h6>by {author}</h6>
    } else if (reference) {
      return <h1>{title}</h1><br><h6>Reference: {reference}</h6>
    } else {
      //return <h1 class="article-title">{title}</h1>
      return <h1>{title}</h1>
    }
  } else {
    return null
  }
}
//ArticleTitle.css = `
//.article-title {
  //margin: 2rem 0 0 0;
//}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
