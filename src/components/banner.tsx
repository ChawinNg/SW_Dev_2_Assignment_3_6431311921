'use client'
import styles from './banner.module.css'
import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Banner(){
    const cover = ['/img/vaccine.jpg','/img/vaccine2.jpg','/img/vaccine3.jpg','/img/vaccine4.jpg']
    const [index,setIndex] = useState(0)
    const router = useRouter()
    return (
        <div className="block p-1.5 m-0 w-screen h-70vh font-bold relative" onClick={()=>setIndex(index+1)}>
            <Image src={cover[index%4]}
            alt='cover'
            fill={true}
            objectFit='cover'/>
            <div className="relative top-32 z-20 text-center text-4xl">
                <h1>Covid-19 Vaccinate</h1>
                <h3>"AstraZeneca are ready for you"</h3>
            </div>
            <button className="bg-white text-cyan-600 border border-cyan-600
            font-semibold py-2 px-2 my-5 mx-10 rounded z-30 absolute bottom-0 right-0
            hover:bg-cyan-600 hover:text-white hover:border-transparent"
            onClick={(e)=>{e.stopPropagation();router.push('/hospital')}}>Select Your Hospital NOW</button>
        </div>
    )
}