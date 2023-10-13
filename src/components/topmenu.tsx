import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './topmenuitem';
import {getServerSession} from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Link } from '@mui/material';

export default async function TopMenu(){

    const session = await getServerSession(authOptions)

    return (
        <div className="h-16 bg-white fixed z-50 inset-x-0 top-0 flex flex-row-reverse shadow-lg">
            <Image src={'/img/logo.png'} className="h-full w-fit ml-5"
            alt='logo' width={0} height={0} sizes="100vh"/>
            <TopMenuItem title='Booking' pageRef='/booking'/>
            <TopMenuItem title='Home' pageRef='/'/>

            {
                session? <Link href="/api/auth/signout">
                    <div className='w-30 h-10 absolute center my-3 bg-cyan-100 font-sans text-xl 
        text-black font-bold rounded-md shadow-xl pt-1 mx-8 px-2 flex item-center left-0'>
                    Sign-Out of {session.user?.name}
                    </div>
                    </Link>
                : <Link href="/api/auth/signin">
                    <div className='w-30 h-10 absolute center my-3 bg-cyan-100 font-sans text-xl 
        text-black font-bold rounded-md shadow-xl pt-1 mx-8 px-2 flex item-center left-0'>
                    Sign-In
                    </div>
                </Link>
            }
        </div>
    )
}
