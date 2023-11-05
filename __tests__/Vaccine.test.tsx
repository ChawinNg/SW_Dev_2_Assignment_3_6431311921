import Banner from "@/components/banner";
import HospitalCatalog from "@/components/hospitalCatalog";
import {render,screen,waitFor} from "@testing-library/react"
import {userEvent} from '@testing-library/user-event'

const mockResult = {
    'success':true,
    'count':4,
    data:[{
        "_id": "6520fb0547aab40a97409462",
        "name": "Chulalongkorn Hospital",
        "address": "1873 Rama IV Rd",
        "district": "Pathum Wan",
        "province": "Bangkok",
        "postalcode": "10330",
        "tel": "026494000",
        "picture": "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
        "__v": 0,
        "id": "6520fb0547aab40a97409462"},
    {
        "_id": "6520fb5d47aab40a97409465",
        "name": "Rajavithi Hospital",
        "address": "2 Phaya Thai Rd, Thung Phaya Thai",
        "district": "Ratchathewi",
        "province": "Bangkok",
        "postalcode": "10400",
        "tel": "022062900",
        "picture": "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
        "__v": 0,
        "id": "6520fb5d47aab40a97409465"},
    {
        "_id": "6520fba847aab40a97409468",
        "name": "Thammasat University Hospital",
        "address": "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
        "district": "Khlong Luang",
        "province": "Pathum Thani",
        "postalcode": "12120",
        "tel": "029269999",
        "picture": "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
        "__v": 0,
        "id": "6520fba847aab40a97409468"
    },
    {
        "_id": "653e6f315dc3600707ed05b1",
        "name": "Vajira Hospital",
        "address": "681 Samsen Road",
        "district": "Dusit",
        "province": "Bangkok",
        "postalcode": "10300",
        "picture": "https://drive.google.com/uc?id=1YLciRsApgCzbozEZQpnu_5hz5g0HsIwP",
        "__v": 0,
        "id": "653e6f315dc3600707ed05b1"
    }]
}


describe("Hospital Catalog",()=>{
    it('should have correct number of hospital', async()=>{
        const hosCatalog = await HospitalCatalog({hosJson:mockResult})
        render(hosCatalog)
        
    await waitFor(
        ()=>{
            const hosImages = screen.queryAllByRole('img')
            expect(hosImages.length).toBe(4)
        }
    )
    })
})