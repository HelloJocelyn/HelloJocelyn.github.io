import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from "../components/seo"
import HeaderNav from '../components/headerNav'
console.log('mygoals component');

const MyGoals = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <Layout pageTitle="My Goals">
                <p>The list of my goals in my limited years of life</p>
            </Layout>
        </div>

    )
}
export const Head = () => <Seo title="My Goals" />

export default MyGoals