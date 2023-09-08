'use client'
import { type } from "os";
import VaccineCard from "./vaccinecard";
import { Reducer, useReducer } from "react";

export default function CardPanel(){
    const ratingReducer = (ratingList:Map<string,string>, action:{type:string,hosName:string,rating:string})=>{
        switch(action.type) {
            case 'add': {
                return new Map(ratingList.set(action.hosName,action.rating))
            }
            case 'remove': {
                ratingList.delete(action.hosName)
                return new Map(ratingList)
            }
            default: return ratingList
        }
    }
    const [ratingList, dispatchRating] = useReducer(ratingReducer, new Map<string,string>())
    return (
        <div>
            <div style={{margin:"20px",display:"flex", flexDirection:"row",alignContent:"space-around",justifyContent:"space-around",flexWrap:"wrap"}}>
                <VaccineCard name="Chulalongkorn Hospital" imgsrc="/img/chula.jpg"
                delRating={(hos:string,value:string)=>dispatchRating({type:'remove', hosName:hos,rating:value})}
                onRating={(hos:string,value:string)=>dispatchRating({type:'add', hosName:hos,rating:value}) }/>
                <VaccineCard name="Rajavithi Hospital" imgsrc="/img/rajavithi.jpg" 
                delRating={(hos:string,value:string)=>dispatchRating({type:'remove', hosName:hos,rating:value})}
                onRating={(hos:string,value:string)=>dispatchRating({type:'add', hosName:hos,rating:value})}/>
                <VaccineCard name="Thammasat University Hospital" imgsrc="/img/thammasat.jpg" 
                delRating={(hos:string,value:string)=>dispatchRating({type:'remove', hosName:hos,rating:value})}
                onRating={(hos:string,value:string)=>dispatchRating({type:'add', hosName:hos,rating:value})}/>
            </div>
            <div className="w-full text-xl font-medium text-black text-center my-10 bg-slate-100 py-10">Rating:
            {Array.from(ratingList).map((hos)=><div >{hos}</div>)}</div>
            
        </div>
    )
}