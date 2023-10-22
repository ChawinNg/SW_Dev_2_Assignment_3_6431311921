'use client'
import DateReserve from "@/components/BookingDateReserve";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import {useState} from 'react';
import dayjs, { Dayjs } from "dayjs";
import {useDispatch} from "react-redux"
import { AppDispatch } from "@/redux/store";
import { ReservationItem } from "../../../interfaces";
import { addReservation } from "@/redux/features/bookSlice";

export default function Booking(){

    // const session = await getServerSession(authOptions)
    // if(!session || !session.user.token) return null

    // const profile = await getUserProfile(session.user.token)
    // var createAt = new Date(profile.data.createdAt)
    const [firstN, setFName] = useState<string>('')
    const [lastN, setLName] = useState<string>('')
    const [pId, setpId] = useState<string>('')
    const [pickupDate, setPickupDate] = useState<Dayjs|null>(null)
    const [pickupLocation, setLocation] = useState<string>("chula")

    const dispatch = useDispatch<AppDispatch>()
    const makeReservation = ()=>{
        if (pickupDate && pickupLocation){
            const item:ReservationItem={
                fName : firstN,
                lName : lastN,
                pId : pId,
                hosName : pickupLocation,
                date : dayjs(pickupDate).format("YYYY/MM/DD")
            }
            dispatch(addReservation(item))
        }
    }

    return (
        <main className="w-[100%] flex flex-col bold items-center space-y-4 mt-[50px] bg-slate-100 rounded-lg space-x-5 w-fit px-10 py-5 justify center mx-auto">
            <div className="text-xl font-medium text-black">Vaccine Reservation</div>
            <div className="w-fit space-y-5 mt-[50px]">
                <div className="text-l text-left text-gray-600">Name</div>
                <input type="text" id="name" placeholder="Your Name" className="rounded ring-1 ring-inset ring-gray-400 text-md leading-6 
                indent-2 placeholder:text-gray-400 focus:outline-black focus:ring-black focus:placeholder:text-black text-black" 
                onChange={(e)=>{setFName(e.target.value)}}></input>
                <div className="text-l text-left text-gray-600">Surname</div>
                <input type="text" id="surname" placeholder="Your Surname" className="rounded ring-1 ring-inset ring-gray-400 text-md leading-6 
                indent-2 placeholder:text-gray-400 focus:outline-black focus:ring-black focus:placeholder:text-black text-black"
                onChange={(e)=>{setLName(e.target.value)}}></input>
                <div className="text-l text-left text-gray-600">ID Card Number</div>
                <input type="text" id="idcard" placeholder="Your ID Card Number" className="rounded ring-1 ring-inset ring-gray-400 text-md leading-6 
                indent-2 placeholder:text-gray-400 focus:outline-black focus:ring-black focus:placeholder:text-black text-black"
                onChange={(e)=>{setpId(e.target.value)}}></input>
                <div className="text-md text-left text-gray-600">
                    Pick-Up Date and Location
                </div>
                <DateReserve onDateChange={(value:Dayjs)=>{setPickupDate(value)}}
                onLocationChange={(value:string)=>{setLocation(value)}}/>
            </div>
            
            <button className="rounded-md text-black bg-white hover:bg-grey-100 px-5 py-4 text-2xl"
            onClick={makeReservation}>Confirm</button>
            {/* <div className='text-2xl'>User Profile</div>
            <table className='table-auto border-separate border-spacing-2'><tbody>
                <tr><td>Name: {profile.data.name}</td></tr>
                <tr><td>Email: {profile.data.email}</td></tr>
                <tr><td>Tel: {profile.data.tel}</td></tr>
                <tr><td>Member Since:</td><td>{createAt.toString()}</td></tr>
            </tbody></table> */}
        </main>
    )
}
