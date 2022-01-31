import React from 'react'
import { GetStaticPropsContext, GetStaticProps } from 'next'
import dataJSON from '../../data.json'
import Head from 'next/head'
import { dataItem } from '../../Types'
import { useRouter } from 'next/router'

interface dataJSONitem {
  data: dataItem
}

// use square bracket notation when you want to interface a object
interface Options {
  [id: number]: number
}

function job({ data }: dataJSONitem) {
  const router = useRouter()
  console.log(data)
  return (
    <div className=" h-screen w-full scrollbar-hide">
      <Head>Dev Jobs</Head>
      <header className="fixed top-0 z-10 flex h-60 w-full justify-center rounded-none 2xl:rounded-bl-full 2xl:rounded-br-full bg-[#5964E0]">
        <div className="mt-16 flex w-4/5 justify-between text-5xl font-medium text-white">
          <div className="z-30" onClick={() => router.push('/')}>
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
        <section className="relative mt-40 flex h-40 w-1/2 items-center  bg-white">
          <div
            className="absolute left-0 flex h-full w-44 items-center justify-center p-2"
            style={{ backgroundColor: `${data.logoBackground}` }}
          >
            <img className="h-14 w-auto" src={`.${data.logo}`} alt="" />
          </div>
          <div className="ml-60 mr-16 flex w-full items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-4xl font-semibold">{data.company}</h1>
              <p className="text-xl text-[#6E8098]">{data.company}.com</p>
            </div>
            <div className="flex space-x-4">
              <button className="rounded-lg bg-[#f4f6f8] py-3 px-5 text-xl font-semibold text-[#5964E0]">
                Apply Now
              </button>
              <button
                onClick={() => router.push('/')}
                className="rounded-lg bg-[#f4f6f8] py-3 px-5 text-xl font-semibold text-[#5964E0]"
              >
                Home
              </button>
            </div>
          </div>
        </section>
        <div className="absolute top-[300px] -z-10 h-20 w-full bg-[#f4f6f8] pt-[120px]" />
      </div>

      <main className="-z-20 mt-[480px] flex w-full flex-col items-center justify-center pb-60 text-4xl text-black">
        <div className="mb-4 flex w-1/2 flex-col  justify-center  bg-white">
          <div className="p-16">
            <div className="flex w-full items-center justify-between">
              <div className="w-full">
                <p className="py-4 text-2xl text-[#6E8098]">
                  {data.postedAt} • {data.contract}
                </p>
                <h1 className="text-4xl font-semibold">{data.position}</h1>
                <p className="py-4 text-2xl text-[#5964E0]">{data.location}</p>
              </div>
              <div className="flex flex-nowrap">
                <button className="w-52 rounded-lg bg-[#5964E0] py-5 px-5 text-2xl font-semibold text-white">
                  Apply Now
                </button>
              </div>
            </div>
            <br />
            <p className="text-2xl leading-loose text-[#6E8098]">
              {data.description}
            </p>
            <br />
            <h1 className="text-3xl font-semibold">Requirements</h1>
            <br />
            <p className="text-2xl leading-loose text-[#6E8098]">
              {data.requirements.content}
            </p>
            <br />
            <ul className="list-inside list-disc text-2xl leading-loose text-[#6E8098]">
              {data.requirements.items.map((item: any, idx: number) => {
                return (
                  <li className="" key={idx}>
                    {item}
                  </li>
                )
              })}
            </ul>
            <br />
            <h1 className="text-3xl font-semibold">What You Will Do</h1>
            <br />
            <p className="text-2xl leading-loose text-[#6E8098]">
              {data.role.content}
            </p>
            <br />
            <ul className="list-inside list-disc text-2xl leading-loose text-[#6E8098]">
              {data.role.items.map((role: any, idx: number) => {
                return (
                  <li
                    className={'before:content-[" pl-2' + `${idx}"]`}
                    key={idx}
                  >
                    {role}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 flex h-32 w-full items-center justify-center bg-white shadow-inner">
        <div className="flex w-1/2 items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold">{data.position}</h1>
            <p className="text-xl text-[#6E8098]">{data.company}.com</p>
          </div>
          <div className="mr-15">
            <button className="rounded-lg bg-[#5964E0] py-3 px-5 text-xl font-semibold text-white">
              Apply Now
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default job

export const getStaticPaths = async () => {
  const options: Array<object> = []

  for (let i = 1; i < dataJSON.length + 1; i++) {
    options.push({ params: { id: `${i}` } })
  }
  return {
    paths: options,
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext // any solves the bottom issue
) => {
    const { id } = context?.params;
    const data = dataJSON[id - 1];
    console.log(id);
    return {
      props: {
        data,
      },
    }
}
