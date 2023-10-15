'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';


export default function Home() {
  return (
    <main className='bg-hero bg-cover bg-center w-full h-[800px] '>
      <Navbar />
      <div className='flex flex-row justify-around items-center flex-wrap my-[140px] text-[#00ED82] uppercase text-[13px] font-bold  '>
        <div className='flex flex-col items-center'>
            <h3 className='mb-4'>Disney Bundle Duo Basic</h3>
            <Image src='/logo-bundleDis.png' alt='logo-bundle'width={150} height={200}/>
            <o className='mt-4 ml-4 text-white text-[16px] text-center font-semibold'>Both with ads, for <br />  $9.99/month.</o>
            <button className='text-black mt-4 bg-[#00ED82] w-full h-[40px] rounded-sm uppercase'>Get Them Both</button>
        </div>
        <div className='flex flex-col items-center'>
            <h3 className='mb-4'>Disney Bundle Trio Basic</h3>
            <Image src='/logo-bundle.png' alt='logo-bundle' width={150} height={200} />
            <o className='mt-4 ml-4 text-white text-[16px] text-center font-semibold'>All with ads, for <br />  $14.99/month.</o>
            <button className='text-black bg-[#00ED82] w-full h-[40px] rounded-sm uppercase mt-6'>Get All Three</button>
        </div>

      </div>
   

    </main>
  )
}
