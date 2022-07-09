import Container from '../components/container'
import Layout from '../components/layout'
import Table from '../components/table'
import Head from 'next/head'
import Header from '../components/header'

export default function Team({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>&lt; Lambda /&gt; | Team</title>
        </Head>
        <Container>
          <Header/>
            <Table teamMembers={
                [{"designation": "Mentor", "name": "Divyansh Kharbanda", "contact": "ep19btech11002@iith.ac.in"}]
            }/>
        </Container>
      </Layout>
    </>
  )
}