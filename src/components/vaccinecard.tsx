import styles from './vaccinecard.module.css'
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import Rating from '@mui/material/Rating';
import * as React from 'react';
import {useEffect} from 'react'


export default function VaccineCard({name,imgsrc,rate,dispatchRating} : {name:string,imgsrc:string,rate:number,dispatchRating:Function}){
    const [value,setValue] = React.useState<number | null>(null);
    {console.log(rate)}
    useEffect(() => {setValue(rate)},[rate])
    // const [ratingList, dispatchRating] = useReducer(ratingReducer, new Map<string,string>())
    return (
        <InteractiveCard>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgsrc}
                    alt='Covid Information'
                    fill={true}
                    className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[15%] p-[10px] text-black font-bold text-center my-2 relative'>{name}</div>
            <Rating id="rate"className='mb-5 object-contain object-center'  value={value} onChange={(e,newValue)=> {setValue(newValue);e.stopPropagation;dispatchRating({type:'add', hosName:name,rating:newValue})}}/>
            {/* <button className="mx-auto flex text-sm h-[10%] rounded-md bg-sky-600 hover:bg-indigo-600 px-2 py-1 shadow-sm text-white"
            onClick={(e)=>{e.stopPropagation(); onRating(name)}}>Rating</button> */}
        </InteractiveCard>
        
    );
}

