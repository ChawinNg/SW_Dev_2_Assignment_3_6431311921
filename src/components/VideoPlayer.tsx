'use client'
import { useEffect } from "react"
import { useRef } from "react"
import { useWindowListener } from "@/hooks/useWindowListener"

export function VideoPlayer({vdoSrc, isPlaying}: {vdoSrc:string,isPlaying:boolean}){
    const vdoRef = useRef<HTMLVideoElement>(null)

    useEffect(()=>{
        if(isPlaying){
            vdoRef.current?.play()
        } else {
            vdoRef.current?.pause()
        }
    })

    useWindowListener('contextmenu',(e)=>{e.preventDefault()})
    
    return (
        <video className='w-[40%]' src={vdoSrc} ref={vdoRef} muted loop controls/>
    )
}