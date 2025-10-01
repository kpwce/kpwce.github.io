import * as React from "react"
import { Link } from "gatsby"

import "./blog-block.css"


const BlogBlock = ({ title, description, path}) => (

    <div>
        <Link to={"/blog" + path} className="blog-block">
            <div className="blog-text" style={{ textDecoration: 'none'}}>
            <b className="blog-title">{title}</b>
            <p className="blog-desc">{description}</p>
            <hr className="blog-line" />
            </div>
        </Link>
        </div>
)

export default BlogBlock