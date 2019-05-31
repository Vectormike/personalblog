import React from 'react'
import {Link} from "gatsby"
const  AboutPage = () => {
    return (
        <div>
            <h1>About</h1>
            <p>I am just a boy.. <Link to="/contact">Contact me</Link></p>
        </div>
    )
}

export default AboutPage;
