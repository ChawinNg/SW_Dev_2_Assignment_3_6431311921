import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner(){
    return (
        <div className="block p-1.5 m-0 w-screen h-70vh font-bold relative">
            <Image src={'/img/vaccine.jpg'}
            alt='cover'
            fill={true}
            objectFit='cover'/>
            <div className="relative top-32 z-20 text-center text-4xl">
                <h1>Covid-19 Vaccinate</h1>
                <h3>"AstraZeneca are ready for you"</h3>
            </div>
        </div>
    )
}