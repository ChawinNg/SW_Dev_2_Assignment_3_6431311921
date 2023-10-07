import CardPanel from '@/components/cardpanel'
import getHospitals from '@/libs/getHospitals'
import HospitalCatalog from '@/components/hospitalCatalog'
import { Suspense } from 'react'
import { LinearProgress } from '@mui/material'

export default function Hospital({params}:{params:{id:string}}){
    const hospitals = getHospitals()
    return (
        <main className="text-center p-5 my-10">
            <h1 className='text-2xl font-bold'>Select Your Hospital</h1>
            <Suspense fallback={<p>Loading....<LinearProgress/></p>}>
            <HospitalCatalog hosJson={hospitals}/>
            </Suspense>
        </main>
    )
}