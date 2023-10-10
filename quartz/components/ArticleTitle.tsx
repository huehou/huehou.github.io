import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function ArticleTitle({ fileData }: QuartzComponentProps) {
  const title = fileData.frontmatter?.title
  const author = fileData.frontmatter?.author
  const reference = fileData.frontmatter?.reference
  if (title) {
    if (author) {
	  return (
	    <div>
			<h1>
			  {title}
			</h1>
			<h6>
			  by {author}
			</h6>
		</div>
	  )
	} else if (reference) {
	  return (
	    <div>
			<h1>
			  {title}
			</h1>
			<h6>
			  Reference: {reference}
			</h6>
		</div>
	  )
	} else {
	  return <h1>{title}</h1>
	}
  } else {
    return null
  }
}
ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
