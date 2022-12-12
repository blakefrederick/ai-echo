import Link from 'next/link'
import BreakfastGenerator from '../components/BreakfastRecipe'
import Game from '../components/Game'
import Layout from '../components/Layout'
import Lines from '../components/Lines'
import Shift from '../components/Shift'
import Snowflake from '../components/Snowflake'
import Spiral from '../components/Spiral'
import TwitterTimeline from '../components/TwitterTimeline'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <Link href="/about">About</Link>
    <p>
      <Spiral/>
      <TwitterTimeline/>
      <BreakfastGenerator/>
      <Shift/>
      <Game/>
      <Lines/>
      <Snowflake/>
    </p>
  </Layout>
)

export default IndexPage
