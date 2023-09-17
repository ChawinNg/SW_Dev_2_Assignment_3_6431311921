import styles from './vaccinecard.module.css'
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import Rating from '@mui/material/Rating';
import * as React from 'react';
import {useEffect} from 'react'
import Link from 'next/link';

export default function VaccineCard({name,imgsrc,rate,dispatchRating} : {name:string,imgsrc:string,rate:number,dispatchRating:Function}){
    const [value,setValue] = React.useState<number | null>(4);
    useEffect(() => {setValue(rate)},[rate]);

    return (
        <InteractiveCard>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgsrc}
                    alt='Covid Information'
                    fill={true}
                    className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[15%] p-[10px] text-black font-bold text-center my-2 relative'>{name}</div>
            <div>
            <Rating className='mb-5 object-contain object-center' defaultValue={4} value={value} onClick={(e)=>{e.stopPropagation()}}onChange={(e,newValue)=> {setValue(newValue);
            e.stopPropagation;dispatchRating({type:'add', hosName:name,rating:newValue})}}/>
            </div>
        </InteractiveCard>
        
    );
}

