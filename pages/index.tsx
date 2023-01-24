import Head from 'next/head'
import Link from 'next/link'
import Layout from '../layouts'


export default function Home() {
  return (
    <>
      <Head>
        <title>Nextjs test app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />        
      </Head>
      <Layout>      
        <p>This is the home page of the app</p>
      </Layout>
    </>
  )
}
