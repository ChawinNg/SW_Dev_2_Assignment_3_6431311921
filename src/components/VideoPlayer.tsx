'use client'

import { useRef } from "react"
export function VideoPlayer({vdoSrc, isPlaying}: {vdoSrc:string,isPlaying:boolean}){
    const vdoRef = useRef<HTMLVideoElement>(null)

    return (
        <video className='w-[40%]' src={vdoSrc} ref={vdoRef} muted loop controls/>
    )
}