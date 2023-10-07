'use client'
import { type } from "os";
import VaccineCard from "./vaccinecard";
import { Reducer, useReducer } from "react";
import {useState} from 'react';
import Link from "next/link";
import { useRef,useEffect } from "react";
import getHospitals from "@/libs/getHospitals";

export default function CardPanel(){

    const [hosResponse, setHosResponse] = useState(null)

    useEffect(()=>{
        const fetchData = async () =>{
            const hoss = await getHospitals()
            setHosResponse(hoss)
        }
        fetchData()
    },[])

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
    // const hospitalRepo = [{hid:"001",name:"Chulalongkorn Hospital", img:"/img/chula.jpg"},
    //             {hid:"002",name:"Rajavithi Hospital", img:"/img/rajavithi.jpg"},
    //             {hid:"003",name:"Thammasat University Hospital", img:"/img/thammasat.jpg"}]
    
    if(!hosResponse) return (<p>Hospital Panel is Loading...</p>)

    return (
        <div>
            <div style={{margin:"20px",display:"flex", flexDirection:"row",alignContent:"space-around",justifyContent:"space-around",flexWrap:"wrap"}}>
                {hosResponse.data.map((hosItem)=>(
                <Link href={`/hospital/${hosItem.hid}`}>
                <VaccineCard name={hosItem.name} imgsrc={hosItem.pictuture} rate={ratingList.get(hosItem.name) || 0}
                dispatchRating={dispatchRating}/>
                </Link>
                ))}
            </div>
            <div className="w-[100%] text-black text-center my-10 bg-slate-100 py-10 text-2xl font-bold">Rating
            {Array.from(ratingList).map((hos)=><div className="cursor-pointer hover:bg-neutral-200 text-xl font-medium" 
            onClick={()=>{dispatchRating({type:'remove',hosName:hos[0],rating:hos[1]})}}>{hos[0]} : {hos[1]}</div>)}    
            </div>
        </div>
    )
}