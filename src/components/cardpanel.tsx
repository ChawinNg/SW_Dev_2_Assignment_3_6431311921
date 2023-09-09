'use client'
import { type } from "os";
import VaccineCard from "./vaccinecard";
import { Reducer, useReducer } from "react";
import {useState} from 'react';

export default function CardPanel(){
    const ratingReducer = (ratingList:Map<string,number>, action:{type:string,hosName:string,rating:number})=>{
        switch(action.type) {
            case 'add': {
                return new Map(ratingList.set(action.hosName,action.rating))
            }
            case 'remove': {
                let tmp= new Map(ratingList)
                tmp.delete(action.hosName)
                return new Map(tmp)
            }
            default: return ratingList
        }
    }
    const [ratingList, dispatchRating] = useReducer(ratingReducer, new Map<string,number>())
    return (
        <div>
            <div style={{margin:"20px",display:"flex", flexDirection:"row",alignContent:"space-around",justifyContent:"space-around",flexWrap:"wrap"}}>
                <VaccineCard name="Chulalongkorn Hospital" imgsrc="/img/chula.jpg" rate={ratingList.get("Chulalongkorn Hospital") || 0}
                dispatchRating={dispatchRating}/>
                <VaccineCard name="Rajavithi Hospital" imgsrc="/img/rajavithi.jpg"
                rate={ratingList.get("Rajavithi Hospital") || 0}
                dispatchRating={dispatchRating}/>
                <VaccineCard name="Thammasat University Hospital" imgsrc="/img/thammasat.jpg"
                rate={ratingList.get("Thammasat University Hospital") || 0}
                dispatchRating={dispatchRating}/>
            </div>
            <div className="w-[100%] text-black text-center my-10 bg-slate-100 py-10 text-2xl font-bold">Rating
            {Array.from(ratingList).map((hos)=><div className="cursor-pointer hover:bg-neutral-200 text-xl font-medium" 
            onClick={()=>{dispatchRating({type:'remove',hosName:hos[0],rating:hos[1]})}}>{hos[0]} : {hos[1]}</div>)}
            </div>
        </div>
    )
}