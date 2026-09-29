export type ArticleSummary = {
  id: string
  title: string
  category: string
  publishedAt: string // ISO 8601, UTC
  image: { url: string; alt: string } | null
}

export type Article = ArticleSummary & {
  body: string // HTML
}

const fetchArticleDetails = async (id: string): Promise<Article> => {
  const res = await fetch(`https://eqdesk.vercel.app/api/articles/${id}`)

  if (!res.ok) {
    throw new Error(`Error occured: ${res.status}`)
  }

  const json = (await res.json()) as Article
  return json
}

function createMarkup() {
  return { __html: "First &middot; Second" }
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />
}

export default async function Home({ params }: PageProps<"/articles/[id]">) {
  const { id } = await params
  const article = await fetchArticleDetails(id)

  return (
    <div>
      <main>
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl">{article.title}</h1>
          <section className="flex gap-4">
            <div className="w-48 h-48">
              {article.image ? (
                <img src={article.image.url} alt={article.image.alt} />
              ) : (
                <img src="https://placehold.co/600x400" alt="placeholder" />
              )}
            </div>
            <div>
              <h3 className="text-xl">{article.title}</h3>
              <p>{article.category}</p>
              <p>Published {article.publishedAt}</p>
            </div>

            <div dangerouslySetInnerHTML={{ __html: article.body }} />
          </section>
        </div>
      </main>
    </div>
  )
}
