"use client"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeReservation } from "@/redux/features/bookSlice"

export default function ReservationCart(){
    const hosItems = useAppSelector((state)=> state.bookSlice.hosItems)
    const disPatch = useDispatch<AppDispatch>()

    if(hosItems.length != 0){
        return(
            <>
            {
                hosItems.map((reservationItem)=>(
                    <div className="bg-slate-200 rounded px-10 mx-5 py-5 my-8"
                    key={reservationItem.hosName}>
                        <div className="text-xl">ชื่อ : {reservationItem.fName}</div>
                        <div className="text-xl">นามสกุล : {reservationItem.lName}</div>
                        <div className="text-xl">รหัสประจำตัวประชาชน : {reservationItem.pId}</div>
                        <div className="text-xl">โรงพยาบาล : {reservationItem.hosName}</div>
                        <div className="text-xl">วันที่ : {reservationItem.date}</div>
                        <button className="rounded-md text-black bg-white hover:bg-grey-100 px-5 py-4 text-xl my-4"
                        onClick={()=>disPatch(removeReservation(reservationItem))}>Cancle Booking</button>
                    </div>
                ))
                }
            </>
        )
    }
    else {
        return(
            <div className="bg-slate-200 rounded px-5 mx-5 py-5 my-8 text-center text-xl font-bold">
                No Vaccine Booking
            </div>
        )
    }

    
}