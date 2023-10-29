import Hospital from "@/db/models/Hospital"
import { dbConnect } from "@/db/dbConnect"
import {revalidateTag} from "next/cache"
import {redirect} from "next/navigation"

export default function AddHospitalForm(){
    const addHospital = async (addHosForm:FormData) => {
        "use server"
        const name = addHosForm.get("hosName")
        const address = addHosForm.get("addr")
        const district = addHosForm.get("district")
        const province = addHosForm.get("province")
        const postalcode = addHosForm.get("posCode")
        const tel = addHosForm.get("tel")
        const picture = addHosForm.get("picture")

        try {
            await dbConnect()
            const hos = await Hospital.create({
            "name" :name,
            "address" : address,
            "district" : district,
            "province" : province,
            "postalcode" : postalcode,
            "tel ": tel,
            "picture": picture
            })
        }
        catch(error){
            console.log(error)
        }

        revalidateTag("hoss")
        redirect("/hospital")
    }
    return (
        <form action={addHospital} className="w-[100%] flex flex-col bold items-center space-y-4 mt-[50px] bg-slate-100 rounded-lg space-x-5 px-10 py-5 justify center mx-auto">
            <div className="text-xl text-blue-700">Add Hospital</div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="hosName">
                    Hospital Name</label>
                <input type="text" required id="hosName" name="hosName" placeholder="Hospital Name"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>

            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="addr">
                    Address</label>
                <input type="text" required id="addr" name="addr" placeholder="Hospital's Address"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>

            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="district">
                    District</label>
                <input type="text" required id="district" name="district" placeholder="Hospital's District"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>

            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="province">
                    Province</label>
                <input type="text" required id="province" name="province" placeholder="Hospital's Province"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>

            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="posCode">
                    Postal Code</label>
                <input type="text" required id="posCode" name="posCode" placeholder="Postal Code"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>

            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="tel">
                    Telephone Number</label>
                <input type="text" required id="tel" name="tel" placeholder="Telephone Number"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>

            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="picture">
                    Picture</label>
                <input type="text" required id="picture" name="picture" placeholder="Picture's URL"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-700
            text-white p-2 rounded">Add New Hospital</button>
        </form>
    )
}