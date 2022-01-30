import Head from 'next/head';
import { GetStaticProps } from 'next';
import axios from 'axios';

interface Options {
  method: string,
  url: string,
  params: { [key: string]: any}
  headers: { [key: string]: any}
}

interface Props {
  data: {}
}

var options:Options = {
  method: 'GET',
  url: 'https://awesome-indeed.p.rapidapi.com/indeed_jobs_detailed',
  params: {search_query: 'Software', page: '1'},
  headers: {
    'x-rapidapi-host': 'awesome-indeed.p.rapidapi.com',
    'x-rapidapi-key': '5de04b4153msh02581199aae4872p19499cjsn45ead7167025'
  }
};

export default function Home({ data } :Props) {
  console.log(data);
  return (
    <div className=' w-full h-screen'>
      <Head>Dev Jobs</Head>
      <header className="absolute top-0 flex h-36 w-full items-center justify-center bg-[#5964E0]">
        <div className="flex w-4/5 justify-between text-5xl text-white font-medium">
          <div>
            <h1>dev Jobs</h1>
          </div>
          <div>
            <h1>Light Mode // Dark Mode</h1>
          </div>
        </div>
      </header>
      <main className="flex justify-center text-4xl text-black">
        <div className="flex w-4/5 flex-col">
          
        </div>
      </main>
      <footer className=" fixed bottom-0 flex h-32 w-full justify-center items-center bg-white">
        <div className='flex space-x-5 text-2xl '>
          <div className='border-4 border-[#5964e0] py-4 px-6 rounded-xl cursor-pointer hover:bg-[#5964e0] hover:text-white transition ease-in-out duration-300'>
            <button className='font-medium'>Sign In</button>            
          </div>
          <div className='border-4 border-[#5964e0] py-4 px-6 rounded-xl cursor-pointer hover:bg-[#5964e0] hover:text-white transition ease-in-out duration-300'>
            <button className='font-medium'>Sign Up</button>
          </div>
        </div>
      </footer>
    </div>
  )
}


export const getStaticProps:GetStaticProps = async() => {
  const data = await axios.request(options).then(res => {
    return res.data;
  })
  return {
    props: {
      data
    }
  }
}
