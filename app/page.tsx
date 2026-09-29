import Image from "next/image"
import Link from "next/link"

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

const fetchArticles = async (): Promise<ArticleSummary[]> => {
  const res = await fetch("https://eqdesk.vercel.app/api/articles")

  if (!res.ok) {
    throw new Error(`Error occured: ${res.status}`)
  }

  const json = (await res.json()) as ArticleSummary[]
  return json
}

export default async function Home() {
  const articles = await fetchArticles()

  return (
    <div>
      <main>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="border p-4">
              <h2 className="text-4xl mb-4">Articles</h2>
              <section className="flex flex-col gap-4">
                {articles.map((article) => (
                  <Link key={article.id} href={`/articles/${article.id}`}>
                    <article className="flex gap-4">
                      <div className="w-48 h-48">
                        {article.image ? (
                          <img
                            src={article.image.url}
                            alt={article.image.alt}
                          />
                        ) : (
                          <img
                            src="https://placehold.co/600x400"
                            alt="placeholder"
                          />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl">{article.title}</h3>
                        <p>{article.category}</p>
                      </div>
                    </article>
                  </Link>
                ))}
              </section>
            </div>
            {/* <div className="border">
              <h2 className="text-4xl">Prices</h2>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  )
}
