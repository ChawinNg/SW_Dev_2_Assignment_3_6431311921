'use client'
import { VideoPlayer } from "./VideoPlayer"
import { useState } from "react"
export function PromoteCard (){
    const [playing,SetPlaying] = useState(true)

    return (
        <div className='w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row'>
            <VideoPlayer isPlaying={playing} vdoSrc="/video/getvaccine.mp4"></VideoPlayer>
            <div>
                Get your Vaccine today.
            </div>
        </div>
    )
}