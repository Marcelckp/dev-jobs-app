import Head from 'next/head'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { useEffect, useState } from 'react'
import dataJSON from '../data.json'

interface Options {
  method: string
  url: string
  params: { [key: string]: any }
  headers: { [key: string]: any }
}

interface Props {
  data: {}
}

var options: Options = {
  method: 'GET',
  url: 'https://awesome-indeed.p.rapidapi.com/indeed_jobs_detailed',
  params: { search_query: 'Software', page: '1' },
  headers: {
    'x-rapidapi-host': 'awesome-indeed.p.rapidapi.com',
    'x-rapidapi-key': '5de04b4153msh02581199aae4872p19499cjsn45ead7167025',
  },
}

export default function Home({ data }: Props) {
  const [jobData, setData] = useState(dataJSON)

  console.log(jobData)

  return (
    <div className=" h-screen w-full">
      <Head>Dev Jobs</Head>
      <header className="fixed top-0 z-30 flex h-40 w-full items-center justify-center bg-[#5964E0]">
        <div className="flex w-4/5 justify-between text-5xl font-medium text-white">
          <div>
            <h1>dev Jobs</h1>
          </div>
          <div>
            <h1>Light Mode // Dark Mode</h1>
          </div>
        </div>
      </header>
      {/* <div className="mb-52 flex w-4/5 flex-col items-center justify-center">
        <section className="mt-40 w-full">
          <div className="h-32 w-full bg-white">
            <h1>search bar</h1>
          </div>
        </section>
      </div> */}
      <main className=" flex w-full flex-col items-center justify-center text-4xl text-black">
        <div className="mb-52 flex w-4/5 flex-col items-center justify-center">
          <section className="mt-40 w-full">
            <div className="h-32 w-full bg-white">
              <h1>search bar</h1>
            </div>
          </section>
          <div className="mt-32 grid w-full grid-cols-3 gap-y-20 gap-x-10">
            {jobData && jobData.map((val: any) => {
                  return (
                    <div
                      key={val.id}
                      className="relative h-72 rounded-lg bg-white p-5"
                    >
                      <div className='absolute top-[-30px] h-16 w-16 flex justify-center' style={{backgroundColor: `${val.logoBackground}`}}>
                        <img src={val.logo} alt="" />
                      </div>
                      <div className="flex mt-10 space-x-3 text-lg text-[#6E8098]">
                        <h1>{val.postedAt}</h1>
                        <p>•</p>
                        <h1>{val.contract}</h1>
                      </div>

                      <h1 className='mt-2 text-2xl py-2 font-bold'>{val.position}</h1>
                      <p className='text-lg text-[#6E8098] py-2'>{val.company}</p>
                      <h1 className='absolute bottom-3 font-semibold text-lg text-[#5964E0]'>{val.location}</h1>
                    </div>
                  )
                })}
          </div>
        </div>
      </main>
    </div>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   let data
//   data = await axios
//     .request(options)
//     .then((res) => {
//       return { data: res.data.jobs, fetch: true }
//     })
//     .catch((err) => console.log(err))

//   if (!data) {
//     data = dataJSON
//   }

//   return {
//     props: {
//       data,
//     },
//     revalidate: 86400,
//   }
// }
