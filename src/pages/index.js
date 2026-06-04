import * as React from "react"
import Seo from "../components/seo"
import Home from "./home";


const IndexPage = () => {
    return (
        <div>
            <Home></Home>
        </div>

    );
}


export default IndexPage

export const Head = () => <Seo title="Home Page"/>
