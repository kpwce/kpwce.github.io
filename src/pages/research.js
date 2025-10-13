import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ResearchBlock from "../components/research-block"
import { Link } from "gatsby"

const researchList = [
  {
    title: "Profiling Poets with Spanish Poetry",
    description: "A research project developed in Spring 2025 for the Textual and Digital Studies Capstone.",
    content: {
      pdf: "/research/profiling_spanish_poets.pdf",
      presentation: "/research/profiling_spanish_poets_presentation.pdf",
    }
  }
]

const quotesList = [
  {
    quote:
      `¿En perseguirme, mundo, qué interesas?
  ¿En qué te ofendo, cuando sólo intento
  poner bellezas en mi entendimiento
  y no mi entendimiento en las bellezas?`,
    author: "Sor Juana Inés de la Cruz"
  },
  {
    quote: "Quizá me engañen la vejez y el temor, pero sospecho que la especie humana –la única– está por extinguirse y que la Biblioteca perdurará: iluminada, solitaria, infinita, perfectamente inmóvil, armada de volúmenes preciosos, inútil, incorruptible, secreta.",
    author: "Jorge Luis Borges"
  },

  {
    quote: "We cannot bring back to life those whom we find cast ashore in the archives. But this is not a reason to make them suffer a second death. There is only a narrow space in which to develop a story that will neither cancel out nor dissolve these lives, but leave them available so that another day, and elsewhere, another narrative can be built from their enigmatic presence.",
    author: "Arlette Farge (translated by Thomas Scott-Railton)"
  },

]

const ResearchPage = () => (
  <Layout>

    <h1>Research</h1>

    I'm interested in computation in cultural heritage settings, specifically for preservation and knowledge discovery. My interest in Spanish literature sometimes overlaps.

    <h2>My work</h2>

    {researchList.map(item => (
      <ResearchBlock title={item.title} description={item.description} research_map={item.content} />
    ))}


    <h2>Food for thought quotes</h2>

    <div className="two-col-grid">
      {quotesList.map(item => (
        <div className="quote">
          {item.quote}
          <br />
          - <b>{item.author}</b>
        </div>
      ))}
    </div>

    <br/>
    <Link to="/" className="redirect">☞ Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Research" />

export default ResearchPage
