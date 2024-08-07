import { createSlice } from "@reduxjs/toolkit";

const CompanySlice = createSlice({
  name: "company",
  initialState: {
    singleCompany: null,
    companies: [],
    searchCompanyByText: "",
  },
  reducers: {
    setsingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
    setCompanies: (state, action) => {
      state.companies = action.payload;
    },
    setsearchCompanyByText: (state, action) => {
      state.searchCompanyByText = action.payload;
    },
  },
});

export const { setsingleCompany, setCompanies,setsearchCompanyByText } = CompanySlice.actions;
export default CompanySlice.reducer;
