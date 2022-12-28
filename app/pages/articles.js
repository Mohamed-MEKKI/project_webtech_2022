import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout.js'
import { supabase } from './api/supabase'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useState } from 'react'



export default function Articles({
  articles
}) {
  const supabase = useSupabaseClient()
  const [message, setMessage] = useState(null)
  //for submetting comments
  const onSubmit = async function(e){
    e.preventDefault()
    const data = new FormData(e.target)
    const { error } = await supabase
      .from('comments')
      .insert(Object.fromEntries(data), { returning: 'minimal' })
    if(error){
      setMessage('Sorry, an unexpected error occured.')
    }else{
      setMessage(
        <div>
          <h2 className="text-center mt-3 ">Confirmation</h2>
          <p>Thank you for sharing. We hope you enjoyed reading!.</p>
        </div>
      )
    }
  }
  // deleting articles
  const makeDelete = async () => {
    const { error,data } = await supabase
            .from('articles')
            .delete()
            .eq('id',data.id)
   if (error){
     console.log(error)
   }
   if (data){
     console.log(data);
   }
}
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
        {articles.map( article => (
          <li key={article.slug} className="my-5">
            <Link rel="preconnect" href="https://rsms.me/"> </Link>
            <Link rel="stylesheet" href="https://rsms.me/inter/inter.css"> </Link>
             <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow my-10">
             <h2 className="font-bold mb-1">{article.title}</h2>
             <p className="tracking-widest text-left text-black md:text-lg dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">{article.message}
            </p>
        <div className="inline-flex items-center rounded-md shadow-sm">
           <Link href="/artcr">
            <button className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                  </span>
                <span>Edit</span>
            </button>
            </Link>
            <Link href={`/articles/${article.slug}`}>
            <button className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border-y border-slate-200 font-medium px-4 py-2 inline-flex space-x-1 items-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>                      
                </span>
                <span>View</span>
            </button>
            </Link>
            <button className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center "  onClick={makeDelete}>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  </span>
                <span>Delete</span>
            </button>
         </div>
        
       </div>
          </li>
        ))}
      </ul>
      
    </Layout>
  )
}

export async function getStaticProps(ctx) {
  let articles = []
  let { data, error, status } = await supabase
    .from('articles')
    .select(`id, slug, message, title`)
  if (!error) articles = data // handle errors
  return {
    props: {
      articles: articles
    }
  };
}


