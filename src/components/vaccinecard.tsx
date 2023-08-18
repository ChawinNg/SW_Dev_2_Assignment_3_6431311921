import styles from './vaccinecard.module.css'
import Image from 'next/image';

export default function VaccineCard(){
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={'/img/covid.jpg'}
                    alt='Covid Information'
                    fill={true}
                    objectFit='cover'/>
            </div>
            <div className={styles.cardtext}>Vaccines help develop immunity by imitating an infection. 
            This type of infection induced by vaccines, however, almost never causes illness. 
            In fact, it activates the immune system to produce antibodies and T-lymphocytes. 
            Once the imitation infection induced by vaccines goes away, the body is left with a supply of memory T-lymphocytes, 
            as well as B-lymphocytes that will remember how to fight off the disease in the future.</div>
        </div>
    );
}

