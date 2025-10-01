import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const socialLinks = [
  {
    text: "Github",
    url: "https://github.com/kpwce",
  },
  {
    text: "Medium",
    url: "https://medium.com/@alysameng",
  },
  {
    text: "LinkedIn",
    url: "www.linkedin.com/in/alysam",
  },
]

const IndexPage = () => (
  <Layout>


    <div className="two-col-grid">
      <div className={styles.textCenter}>
        <h1>
          Hi, my name is <b>Alysa!</b>
        </h1>

        <p>I'm a software engineer in Pinterest's Trust and Safety org, working on systems for user safety.</p>

        <p>I have 2 Bachelor degrees from the University of Washington, specializing in computer science, mathematics, and Spanish. I also have a Computer Science and Engineering MS degree through the Allen School's BS/MS program. In graduate school, I was a part of the Textual and Digital Studies Graduate Certificate program.</p>

        <p>My academic interests are at the intersection of humanities and computation. I study ways computation appears in fiction and enjoy building tools for libraries and archives.</p>

        <p>I like puzzles. My social username, <code>kpwce</code>, is a <a href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher">Viginère cipher</a> of <code>alysa</code> with the key <code>key</code>. You can sometimes find me down a rabbit hole in linguistics, specifically computational linguistics and second-language acquisition.</p>

        <p>I pronounce my name ah-lee-sah (IPA: /əlisə/).</p>
      </div>
      <div>

        <StaticImage
          src="../images/alysa_profile.jpg"
          loading="eager"
          width={500}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Image of Alysa in Grand Central Station"
          style={{ marginBottom: `var(--space-3)` }}
        />

        <p className="image-caption">Photograph of Alysa in New York's Grand Central Station.</p>



        <h2>News</h2>

        <div className={styles.newsBox}>
          <ul>
            <li>August 2025: Started working for Pinterest</li>
            <li>June 2025: Graduated from the University of Washington with a master's degree</li>
          </ul>
        </div>

        <h2>Contact the Editor</h2>

        {socialLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <a href={link.url}>{link.text}</a>
            {i !== socialLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}


        <p className={styles.boxed}>☞ See this <a href="/blog/building-with-gatsby">post</a> about the inspiration and technology behind this website.</p>
      </div>
    </div>


  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
