import Image from 'next/image';

export default function HospitalDetailPage({params}:{params:{hid:string}}){
    
    const hosRepo = new Map()
    hosRepo.set("001",{name:"Chulalongkorn Hospital", img:"/img/chula.jpg"})
    hosRepo.set("002",{name:"Rajavithi Hospital", img:"/img/rajavithi.jpg"})
    hosRepo.set("003",{name:"Thammasat University Hospital", img:"/img/thammasat.jpg"})
    return (
        <main className="text-center my-10">
            <div className="flex flex-row justify center bg-slate-100 px-10 py-5">
                <Image src={(hosRepo.get(params.hid)).img} 
                alt="Hospital Picture"
                width={0} height={0} sizes="100vw"
                className='rounded-lg w-[30%] bg-black center'/>
            <div className='text-xl font-bold mx-5'>{(hosRepo.get(params.hid)).name}</div>
            </div>
        </main>
    )
}