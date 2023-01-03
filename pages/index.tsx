import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">This is a Next.js project that uses Typescript</Link>
    </p>
  </Layout>
)

export default IndexPage
