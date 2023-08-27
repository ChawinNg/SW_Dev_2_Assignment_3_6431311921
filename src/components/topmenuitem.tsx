import styles from './topmenu.module.css'
import Link from 'next/link';

export default function TopMenuItem({title,pageRef}:{title:string, pageRef:string}){
    return (
        <Link className="w-30 h-10 relative center my-auto bg-cyan-100 font-sans text-xl 
        text-black pt-1 font-bold rounded-md shadow-xl px-2" href={pageRef}>
            {title}
        </Link>
    );
}