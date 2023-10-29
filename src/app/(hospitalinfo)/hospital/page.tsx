import CardPanel from '@/components/cardpanel'
import getHospitals from '@/libs/getHospitals'
import HospitalCatalog from '@/components/hospitalCatalog'
import { Suspense } from 'react'
import { LinearProgress } from '@mui/material'
import getUserProfile from '@/libs/getUserProfile'
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddHospitalForm from '@/components/AddHospitalForm'

export default async function Hospital({params}:{params:{id:string}}){
    


    const hospitals = getHospitals()
    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createAt = new Date(profile.data.createdAt)
    
    return (
        <main className="text-center p-5 my-10">
            <h1 className='text-2xl font-bold'>Select Your Hospital</h1>
            <Suspense fallback={<p>Loading....<LinearProgress/></p>}>
            <HospitalCatalog hosJson={hospitals}/>
            </Suspense>

            {
                (profile.data.role=="admin")?
                <div className='my-1 items-center'>
                    <AddHospitalForm></AddHospitalForm>
                </div>
                
                : null
            }
            
        </main>
    )
}