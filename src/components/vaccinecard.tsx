import styles from './vaccinecard.module.css'
import Image from 'next/image';

export default function VaccineCard({name,imgsrc} : {name:string,imgsrc:string}){
    return (
        <div className="w-1/5 h-[300px] rounded-lg shadow-lg">
            <div className={styles.cardimg}>
                <Image src={imgsrc}
                    alt='Covid Information'
                    fill={true}
                    className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[30%] p-[10px] text-black text-center my-5'>{name}</div>
        </div>
    );
}

