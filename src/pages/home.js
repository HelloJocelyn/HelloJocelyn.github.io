import * as React from "react"
import HeaderNav from '../components/headerNav'
import {StaticImage} from "gatsby-plugin-image";
import Seo from "../components/seo";
import Content from "../components/content";


const Home = ()=>{
    return (
        <div>
            <HeaderNav></HeaderNav>
            <Content>
                <StaticImage
                    alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                    src="../images/1.jpg"
                />
                <p>
                    Hello, I'm Jocelyn.

                    I'm lifelong learner

                </p>
            </Content>

        </div>
    )
}
export const Head = () => <Seo title="Home Page" />

export default Home
