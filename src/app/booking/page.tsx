import DateReserve from "@/components/BookingDateReserve";
import Image from "next/image";

export default function Booking(){
    return (
        <main className="w-[100%] flex flex-col bold items-center space-y-4 mt-[50px] bg-slate-100 rounded-lg space-x-5 w-fit px-10 py-5 justify center mx-auto">
            <div className="text-xl font-medium text-black">Vaccine Reservation</div>
            <div className="w-fit space-y-5 mt-[50px]">
                <div className="text-l text-left text-gray-600">Name</div>
                <input type="text" id="name" placeholder="Your Name" className="rounded ring-1 ring-inset ring-gray-400 text-md leading-6 
                indent-2 placeholder:text-gray-400 focus:outline-black focus:ring-black focus:placeholder:text-black text-black"></input>
                <div className="text-l text-left text-gray-600">Surname</div>
                <input type="text" id="surname" placeholder="Your Surname" className="rounded ring-1 ring-inset ring-gray-400 text-md leading-6 
                indent-2 placeholder:text-gray-400 focus:outline-black focus:ring-black focus:placeholder:text-black text-black"></input>
                <div className="text-l text-left text-gray-600">ID Card Number</div>
                <input type="text" id="idcard" placeholder="Your ID Card Number" className="rounded ring-1 ring-inset ring-gray-400 text-md leading-6 
                indent-2 placeholder:text-gray-400 focus:outline-black focus:ring-black focus:placeholder:text-black text-black"></input>
                <div className="text-md text-left text-gray-600">
                    Pick-Up Date and Location
                </div>
                <DateReserve/>
            </div>
            
            <button className="rounded-md text-black bg-white hover:bg-grey-100 px-5 py-4 text-2xl">Confirm</button>
        </main>
    )
}
