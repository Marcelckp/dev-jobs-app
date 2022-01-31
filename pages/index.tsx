import Head from 'next/head'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { useEffect, useState } from 'react'
import dataJSON from '../data.json'
import path from 'path'
import { useRouter } from 'next/router'

interface Options {
  method: string
  url: string
  // square brackets syntax for creating object types for typescript
  params: { [key: string]: any }
  headers: { [key: string]: any }
}

interface Props {
  data: {}
}

// var options: Options = {
//   method: 'GET',
//   url: 'https://awesome-indeed.p.rapidapi.com/indeed_jobs_detailed',
//   params: { search_query: 'Software', page: '1' },
//   headers: {
//     'x-rapidapi-host': 'awesome-indeed.p.rapidapi.com',
//     'x-rapidapi-key': '5de04b4153msh02581199aae4872p19499cjsn45ead7167025',
//   },
// }

export default function Home({ data }: Props) {
  const router = useRouter()
  const [jobData, setData] = useState(dataJSON)

  const addMoreJobs = () => {
    setData((prev) => [...prev, ...dataJSON])
  }

  return (
    <div className=" h-screen w-full">
      <Head>Dev Jobs</Head>
      <header className="fixed top-0 z-10 flex h-60 w-full justify-center rounded-bl-full rounded-br-full bg-[#5964E0]">
        <div className="mt-16 flex w-4/5 justify-between text-5xl font-medium text-white">
          <div>
            <h1>dev Jobs</h1>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="112"
              height="24"
              viewBox="0 0 112 24"
              fill="none"
            >
              <rect x="36" width="48" height="24" rx="12" fill="white" />
              <circle cx="48" cy="12" r="7" fill="#5964E0" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 5.3646C9.67033 5.3646 9.38775 5.07003 9.38775 4.72636V2.83618C9.38775 2.49251 9.67033 2.19794 10 2.19794C10.3297 2.19794 10.6122 2.49251 10.6122 2.83618V4.72636C10.6122 5.07003 10.3297 5.3646 10 5.3646ZM6.40172 7.9521C7.31472 7.1021 8.60365 6.5521 10 6.5521C11.3963 6.5521 12.6853 7.0771 13.5983 7.9521C14.5113 8.8021 15.102 10.0021 15.102 11.3021C15.102 12.6021 14.5113 13.8021 13.5983 14.6521C12.6853 15.5021 11.3963 16.0521 10 16.0521C8.60365 16.0521 7.31472 15.5271 6.40172 14.6521C5.48872 13.8021 4.89796 12.6021 4.89796 11.3021C4.89796 10.0021 5.46187 8.8021 6.40172 7.9521ZM3.0593 5.71002L4.54178 7.14772C4.83827 7.40912 5.26954 7.40912 5.51213 7.14772C5.78167 6.88632 5.78167 6.46808 5.51213 6.20668L4.02965 4.76899C3.76011 4.50759 3.32884 4.50759 3.0593 4.76899C2.78976 5.03039 2.78976 5.44862 3.0593 5.71002ZM0.658124 10.9063H2.60718C2.96156 10.9063 3.26531 11.1803 3.26531 11.5C3.26531 11.8197 2.96156 12.0938 2.60718 12.0938H0.658124C0.303749 12.0938 0 11.8197 0 11.5C0 11.1803 0.303749 10.9063 0.658124 10.9063ZM5.51213 15.8523C5.24259 15.5909 4.81132 15.5909 4.54178 15.8523L3.0593 17.29C2.78976 17.5514 2.78976 17.9697 3.0593 18.2311C3.32884 18.4925 3.76011 18.4925 4.02965 18.2311L5.51213 16.7934C5.78167 16.532 5.78167 16.1137 5.51213 15.8523ZM10 17.6354C10.3297 17.6354 10.6122 17.93 10.6122 18.2737V20.1639C10.6122 20.5075 10.3297 20.8021 10 20.8021C9.67033 20.8021 9.38775 20.5075 9.38775 20.1639V18.2737C9.38775 17.93 9.67033 17.6354 10 17.6354ZM16.9407 17.29L15.4582 15.8523C15.1617 15.5909 14.7305 15.5909 14.4879 15.8523C14.2183 16.1137 14.2183 16.532 14.4879 16.7934L15.9704 18.2311C16.2399 18.4925 16.6712 18.4925 16.9407 18.2311C17.2102 17.9697 17.2102 17.5514 16.9407 17.29ZM16.7347 11.5C16.7347 11.1803 17.0384 10.9063 17.3928 10.9063H19.3419C19.6963 10.9063 20 11.1803 20 11.5C20 11.8197 19.6963 12.0938 19.3419 12.0938H17.3928C17.0384 12.0938 16.7347 11.8197 16.7347 11.5ZM14.4879 7.14772C14.7574 7.40912 15.1887 7.40912 15.4582 7.14772L16.9407 5.71002C17.2102 5.44862 17.2102 5.03039 16.9407 4.76899C16.6712 4.50759 16.2399 4.50759 15.9704 4.76899L14.4879 6.20668C14.2183 6.46808 14.2183 6.88632 14.4879 7.14772Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M106 6C104.358 6 102.842 6.69474 101.768 7.76842C100.663 8.84211 100 10.3579 100 12C100 13.6421 100.695 15.1579 101.768 16.2316C102.842 17.3368 104.358 18 106 18C107.642 18 109.158 17.3053 110.232 16.2316C111.305 15.1579 112 13.6421 112 12C112 11.8147 111.991 11.631 111.974 11.4494C111.867 12.369 111.438 13.2044 110.821 13.8211C110.105 14.5368 109.095 15 108 15C106.905 15 105.895 14.5579 105.179 13.8211C104.463 13.1053 104 12.0947 104 11C104 9.90526 104.442 8.89474 105.179 8.17895C105.895 7.46316 106.905 7 108 7C108.716 7 109.397 7.18933 109.982 7.52669C108.929 6.56718 107.519 6 106 6Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </header>
      <div className="fixed top-[25px] z-10 flex w-full flex-col items-center justify-center pb-10">
        <section className="mt-40 flex h-28 w-3/5 items-center justify-evenly bg-white">
          <div className="flex h-full w-full items-center justify-center border-r-2">
            <div className="flex w-full items-center justify-center space-x-4">
              <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                  fill="#5964E0"
                  fillRule="nonzero"
                />
              </svg>
              <input
                className="w-72 py-3 focus:outline-none active:outline-none"
                type="text"
                placeholder="Filter by title, companies, expertise..."
              />
            </div>
          </div>
          <div className="flex h-full w-full items-center justify-center border-r-2">
            <div className="flex w-full items-center justify-center space-x-4">
              <svg width="20" height="30" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
                  fill="#5964E0"
                  fillRule="nonzero"
                />
              </svg>
              <input
                className="focus: w-72 py-3 outline-none active:outline-none"
                type="text"
                placeholder="Filter by location..."
              />
            </div>
          </div>
        </section>
        <div className="absolute top-[214px] -z-40 h-20 w-full bg-[#f4f6f8] pb-[180px]" />
      </div>

      <main className="-z-20 mt-[480px] flex w-full flex-col items-center justify-center text-4xl text-black">
        <div className="mb-4 flex w-4/5  flex-col items-center justify-center">
          <div className=" grid w-full  grid-cols-1 gap-y-20  gap-x-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {jobData &&
              jobData.map((val: any, idx: number) => {
                return (
                  <div
                    onClick={() => router.push(`/job/${val.id}`)}
                    key={idx}
                    className="relative h-72 cursor-pointer rounded-lg bg-white p-5 px-10"
                  >
                    <div
                      className="absolute top-[-30px] flex h-16 w-16 justify-center rounded-2xl p-3"
                      style={{ backgroundColor: `${val.logoBackground}` }}
                    >
                      <img
                        style={{ backgroundSize: 'cover' }}
                        src={val.logo}
                        alt=""
                      />
                    </div>
                    <div className="mt-10 flex space-x-3 text-lg text-[#6E8098]">
                      <h1>{val.postedAt}</h1>
                      <p>•</p>
                      <h1>{val.contract}</h1>
                    </div>

                    <h1 className="mt-2 py-2 text-2xl font-bold">
                      {val.position}
                    </h1>
                    <p className="py-2 text-lg text-[#6E8098]">{val.company}</p>
                    <h1 className="absolute bottom-5 text-lg font-semibold text-[#5964E0]">
                      {val.location}
                    </h1>
                  </div>
                )
              })}
          </div>
          <div
            onClick={addMoreJobs}
            className="mt-20 flex cursor-pointer justify-center rounded-lg bg-[#5964E0] py-4 px-8 hover:bg-[#939BF4]"
          >
            <button
              onClick={addMoreJobs}
              className="text-2xl font-semibold text-white"
            >
              Load More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   let data
//   data = await axios
//     .request(options)
//     .then((res) => {
//       return { data: res.data.jobs, fetch: true }
//     })
//     .catch((err) => console.log(err))

//   if (!data)
//     data = dataJSON
//   }

//   return {
//     props: {
//       data,
//     },
//     revalidate: 86400, // incremental static regeneration time
//   }
// }