import Head from 'next/head'
import Layout from '../components/Layout'
import { supabase } from '../pages/api/supabase'

export default function showComments({
  comments
}) {
  return (
    <Layout>
      <Head>
        <title>WebTech - articles</title>
        <meta name="description" content="WebTech articles page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='wt-title'>
        Web technologies articles
      </h1>
      <p className="italic my-5">This page fetches data at build time, excellent for SEO.</p>
      <ul>
        {comments.map( comment => (
          <li key={comment.id} className="my-5">
            <h2 className='font-bold mb-1'>{comment.rating}</h2>
            <p className='italic my-5'>{comment.message}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps(ctx) {
  let comments = []
  let { data, error, status } = await supabase
    .from('comments')
    .select(`id, rating,message`)
  if (!error) comments = data // handle errors
  return {
    props: {
      comments: comments
    }
  };
}