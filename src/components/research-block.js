import * as React from "react"
import "./research-block.css"

const ResearchBlock = ({ title, description, research_map }) => (
    // research_map is map of types to urls

    <div className="research-block">
        <b className="research-title">{title}</b>
        <p className="research-desc">{description}</p>
        <ul className="research-list"><span>☞</span>
            {Object.entries(research_map).map(([type, link ], idx) => {
                const indexStr = "research-" + idx;
                return (
                    <a key={indexStr} className="research-icon" href={link}>{type}</a>
                );
            }
            )}
        </ul>
    </div>
)

export default ResearchBlock