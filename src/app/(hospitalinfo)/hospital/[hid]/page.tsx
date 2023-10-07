import Image from 'next/image';
import getHospital from '@/libs/getHospital';

export default async function HospitalDetailPage({params}:{params:{hid:string}}){
    
    const hosDetail = await getHospital(params.hid)

    // const hosRepo = new Map()
    // hosRepo.set("001",{name:"Chulalongkorn Hospital", img:"/img/chula.jpg"})
    // hosRepo.set("002",{name:"Rajavithi Hospital", img:"/img/rajavithi.jpg"})
    // hosRepo.set("003",{name:"Thammasat University Hospital", img:"/img/thammasat.jpg"})
    return (
        <main className="text-center my-10">
            
            <div className="flex flex-row bg-slate-100 px-10 py-5">
                <Image src={hosDetail.data.picture} 
                alt="Hospital Picture"
                width={0} height={0} sizes="100vw"
                className='rounded-lg w-[30%] bg-black'/>
            <div className='flex flex-col'>
                <div className='text-xl font-bold mx-5'>{hosDetail.data.name}</div>
                <div className='text-lg mx-5 text-left'>Description</div>
                <div className='text-md mx-5 text-left'>Address: {hosDetail.data.address}</div>
                <div className='text-md mx-5 text-left'>District:{hosDetail.data.district}</div>
                <div className='text-md mx-5 text-left'>Province: {hosDetail.data.province}</div>
                <div className='text-md mx-5 text-left'>Postal Code:{hosDetail.data.postalcode}</div>
                <div className='text-md mx-5 text-left'>Tel: {hosDetail.data.tel}</div>
                </div>
            </div>
        </main>
    )
}