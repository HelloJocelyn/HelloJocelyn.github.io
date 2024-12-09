import * as React from 'react'
import { Link } from 'gatsby'
import Content from '../components/content'
import Seo from "../components/seo"
import HeaderNav from '../components/headerNav'

const MyGoals = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <Content pageTitle="My Goals">
                <p>The list of my goals in my limited years of life</p>
                <ol>
                    <li>To buy my own house</li>
                    <li>To buy my own car</li>
                    <li>To learn piano well</li>
                    <li>To participate in a music band</li>
                    <li>To learn quantitum</li>
                    <li>To learn robotics</li>
                    <li>To learn finance</li>
                    <li>To invest in stock market</li>
                </ol>
            </Content>
        </div>

    )
}
export const Head = () => <Seo title="My Goals" />

export default MyGoals