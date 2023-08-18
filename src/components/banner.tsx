import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner(){
    return (
        <div className={styles.banner}>
            <Image src={'/img/vaccine.jpg'}
            alt='cover'
            fill={true}
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1>Covid-19 Vaccinate</h1>
                <h3>"AstraZeneca are ready for you"</h3>
            </div>
        </div>
    )
}