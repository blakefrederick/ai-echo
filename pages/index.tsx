import Link from 'next/link'
import Layout from '../components/Layout'
import Spiral from '../components/Spiral'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
      <Spiral/>
    </p>
  </Layout>
)

export default IndexPage
