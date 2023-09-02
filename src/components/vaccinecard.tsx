import styles from './vaccinecard.module.css'
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

export default function VaccineCard({name,imgsrc} : {name:string,imgsrc:string}){
    return (
        <InteractiveCard>
            <div className={styles.cardimg}>
                <Image src={imgsrc}
                    alt='Covid Information'
                    fill={true}
                    className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[30%] p-[10px] text-black font-bold text-center my-5'>{name}</div>
        </InteractiveCard>
        
    );
}

