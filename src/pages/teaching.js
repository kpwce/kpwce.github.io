import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const TeachingPage = () => (
  <Layout>

    <h1>Teaching</h1>

    A list of teaching-related engagements I am a part of. For now, excludes tutoring, mentorship programs and volunteering activities.

    <h2 className="recipe-title">Teaching assistant at University of Washington</h2>
    <ul className="recipe-list">
      <li>6 quarters of CSE 311 (discrete math with computing applications)</li>
      <li>1 quarter of CSE 331 (software design and implementation)</li>
      <li>1 quarter of CSE 332 (data structures and parallelism)</li>
    </ul>

    <p> My time as a TA in the Allen School included grading homework assignments and assessments for over 300 students per quarter, as well as drafting both student-facing and internal course materials. I taught 1-2 weekly sections complementing lecture content, led review sessions, hosted 1-2 hours of weekly office hours, and answered online discussion board questions.

    For more information, visit the <a href="https://www.cs.washington.edu/academics/teaching-assistants/">CSE TA information</a> page.
</p>

    <Link to="/" className="redirect">☞ Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Teaching" />

export default TeachingPage
