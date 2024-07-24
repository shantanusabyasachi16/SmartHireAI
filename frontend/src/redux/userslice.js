import {createSlice} from '@reduxjs/toolkit'



const initialState = {
    user: JSON.parse(window?.localStorage.getItem('userInfo'))??{} ////// user[0] changes
}
const userslice= createSlice({
    name:"userInfo",
    initialState,
    reducers:{
       login(state,action){
    state.user = action.payload.user;
        },
        logout(state){
            state.user= null;
            localStorage?.removeItem("userInfo");
        }
    },
});
export default userslice.reducer

export function Login(user) {
    return (dispatch, getState) => {
      dispatch(userslice.actions. login(user));
    };
  }
  
  export function Logout() {
    return (dispatch, getState) => {
      dispatch(userslice.actions.logout());
    };
  }