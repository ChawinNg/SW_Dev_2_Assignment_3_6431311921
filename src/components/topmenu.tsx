import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './topmenuitem';

export default function TopMenu(){
    return (
        <div className="h-16 bg-white fixed z-50 inset-x-0 top-0 flex flex-row-reverse shadow-lg">
            <Image src={'/img/logo.png'} className="h-full w-fit ml-12"
            alt='logo' width={0} height={0} sizes="100vh"/>
            <TopMenuItem title='Booking' pageRef='/booking'/>
        </div>
    )
}
