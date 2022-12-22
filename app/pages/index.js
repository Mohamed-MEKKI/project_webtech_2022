import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout.js'
import { supabase } from './api/supabase'


export default function Home({articles}) {
  return (
    <Layout>
      <Head>
        <title>WebTech</title>
        <meta name="description" content="Web technologies blogging application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
        <div>
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <span className="text-gray-600">
                Find our latest articles. <a href="\articles" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
              </span>
            </div>
           
      
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">Find our latest articles</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">Subscribe to our service and be part of the comminuty</p>
            <div className="mt-8 flex gap-x-4 sm:justify-center">
              <a href="\artcr" className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                Get started
                <span className="text-indigo-200" aria-hidden="true">&rarr;</span>
              </a>
              <a href="\contact" className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                for information
                <span className="text-gray-400" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
              <defs>
                <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9089FC"></stop>
                  <stop offset="1" stopColor="#FF80B5"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
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
            
         </div>
        
       </div>
          </li>
        ))}
      </ul>
    
<div className="w-full bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className="sm:hidden">
        <label for="tabs" className="sr-only">Select tab</label>
        <select id="tabs" className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Statistics</option>
            <option>Services</option>
            <option>FAQ</option>
        </select>
    </div>
    <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
        <li className="w-full">
            <button id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true" className="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Statistics</button>
        </li>
        <li className="w-full">
            <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false" className="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Services</button>
        </li>
        <li className="w-full">
            <button id="faq-tab" data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="false" className="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">FAQ</button>
        </li>
    </ul>
    </div>
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

