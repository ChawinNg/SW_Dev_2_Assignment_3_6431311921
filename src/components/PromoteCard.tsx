'use client'
import { VideoPlayer } from "./VideoPlayer"
import { useState } from "react"
export function PromoteCard (){
    const [playing,SetPlaying] = useState(true)

    return (
        <div className='w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row'>
            <VideoPlayer isPlaying={playing} vdoSrc="/video/getvaccine.mp4"></VideoPlayer>
            <div className='m-5 relative'>
            Get your Vaccine today.
                <button className="block rounded-full bg-sky-600 hover:bg-indigo-600 px-9 py-2 mt-10
                text-white shadow-sm bottom-0 absolute" onClick={()=> SetPlaying(!playing)}>
                    {playing? 'Pause':'Play'}
                </button>
            
            </div>
        </div>
    )
}