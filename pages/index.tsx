import Link from 'next/link'
import Layout from '../components/Layout'
import Spiral from '../components/Spiral'
import TwitterTimeline from '../components/TwitterTimeline'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
      <Spiral/>
      <TwitterTimeline/>
    </p>
  </Layout>
)

export default IndexPage
