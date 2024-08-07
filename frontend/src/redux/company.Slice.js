import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const CompanySlice = createSlice({
    name:"company",
    initialState:{
        singleCompany:null,
        companies:[],
    },
    reducers:{
        setsingleCompany:(state,action)=>{
            state.singleCompany= action.payload
        },
        setCompanies:(state,action)=>{
   state.companies = action.payload
        }
    }
});

export const {setsingleCompany,setCompanies} = CompanySlice.actions;
export default CompanySlice.reducer;