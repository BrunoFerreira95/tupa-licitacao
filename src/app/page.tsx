'use client'
import { Suspense } from 'react';
import ReactPlayer from 'react-player'

import home from '../assets/home.jpeg'
import Image from 'next/image';

export default function Home() {
  return (
    <div className=''>
      <header className='flex justify-center my-5'>
      <Image src={home} alt="tupa"/>

      </header>
      <section className='flex justify-center items-center flex-col'>

      <Suspense fallback={<p>Loading feed...</p>}>

      <ReactPlayer playing controls url='https://ipservice.aovivonanet.com.br:4433/cmaf/tupa-licitacao-01/index.m3u8' />
      </Suspense>
      <Suspense fallback={<p>Loading feed...</p>}>
      <ReactPlayer playing controls url='https://ipservice.aovivonanet.com.br:4433/cmaf/tupa-licitacao-02/index.m3u8' />
      </Suspense>
      </section>
    </div>
  );
}
