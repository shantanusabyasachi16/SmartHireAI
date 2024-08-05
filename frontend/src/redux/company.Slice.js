import { createSlice } from "@reduxjs/toolkit";

const CompanySlice = createSlice({
    name:"company",
    initialState:{
        singleCompany:null,
    },
    reducers:{
        setsingleCompany:(state,action)=>{
            state.singleCompany= action.payload
        }
    }
});

export const {setsingleCompany} = CompanySlice.actions;
export default CompanySlice.reducer;