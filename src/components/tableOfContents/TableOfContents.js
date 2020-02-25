import React from 'react'
import { NavLink } from "react-router-dom";
const TableOfContents = props => {
    return (
        <div>
            {props.sections ? props.sections.map((section, index) => {
                console.log(section)
                return (
                    <ul key={index}>
                        <h3>{section.name}</h3>
                        {section.indexs.map((li, index) => {
                            return (<li key={index}><NavLink to={"/" + li} >
                                {li}
                            </NavLink></li>)
                        })}
                    </ul>
                )
            }) : null}
        </div>
    )
}

export default TableOfContents;