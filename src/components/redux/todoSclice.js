import { createSlice } from "@reduxjs/toolkit";
import userData from "../../../users.json";
import movieData from "../../../movieData.json"

let initialState = {
  users: userData,
  activeUser: '',
  moviesList:movieData,
  activeMovie:'',
};

let todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    registerSubmit: (state, action) => {
      state.users.push(action.payload);
    },
    loggedInUser:(state,action)=>{
        state.activeUser = action.payload.name;
    },
    setActiveMovie:(state,action)=>{
      state.activeMovie = action.payload.Title;      
    },
    booknowAction:(state,action)=>{
       const defaultMovie = state.activeMovie;
      state.moviesList.map((movie)=>{
        if(movie.Title===defaultMovie){
          movie.occupied = [...movie.occupied,...action.payload];
        }
      })
      alert(`${state.activeUser} booked ${action.payload.toString()} for ${state.activeMovie}`)
    }
    
  },
});
export const { registerSubmit,loggedInUser,booknowAction,setActiveMovie } = todoSlice.actions;
export default todoSlice.reducer;
