import { Interface } from "readline";
import VaccineCard from "./vaccinecard";
import Link from "next/link";
    
    export default async function HospitalCatalog({hosJson}:{hosJson:Object}){
    const hosJsonReady = await hosJson

    return (
        <>
        Explore {hosJsonReady.count} models in our catalog
        <div style={{margin:"20px",display:"flex", flexDirection:"row",alignContent:"space-around"
        ,justifyContent:"space-around",flexWrap:"wrap"}}>
                {hosJsonReady.data.map((hosItem:Object)=>(
                <Link href={`/hospital/${hosItem.id}`} 
                className="w-[100%] sm:w-[50%] lg:w-[25%] p-2 sm:p-4 md:p-4 lg:p-8 m-[20]">
                    
                <VaccineCard name={hosItem.name} imgsrc={hosItem.picture}
                />
                </Link>
                ))}
        </div>
        </>
    )
}