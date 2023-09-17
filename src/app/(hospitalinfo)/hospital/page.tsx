import CardPanel from '@/components/cardpanel'

export default function Hospital({params}:{params:{id:string}}){
    return (
        <main className="text-center p-5 my-10">
            <h1 className='text-2xl font-bold'>Select Your Hospital</h1>
            <CardPanel/>
        </main>
    )
}