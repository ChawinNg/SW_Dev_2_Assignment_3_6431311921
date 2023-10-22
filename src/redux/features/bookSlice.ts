import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { ReservationItem } from "../../../interfaces"

type bookState = {
    hosItems : ReservationItem[]
}

const initialState:bookState = {hosItems:[]}

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addReservation : (state,action:PayloadAction<ReservationItem>)=>{
            if(state.hosItems.length < 1){
                state.hosItems.push(action.payload)
            } else {
                state.hosItems.pop()
                state.hosItems.push(action.payload)
            }
            
        }, 
        removeReservation: (state,action:PayloadAction<ReservationItem>)=>{
            const  remainItems = state.hosItems.filter(obj=>{
                return ((obj.hosName !== action.payload.hosName)
                ||(obj.date !== action.payload.date))
            })
            state.hosItems = remainItems
        }
    }
})

export const {addReservation,removeReservation} = bookSlice.actions
export default bookSlice.reducer