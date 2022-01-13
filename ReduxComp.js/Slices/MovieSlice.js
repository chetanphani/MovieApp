import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import BaseUrl from '../../CommonComp/URL/BaseUrl';
import {APIKey} from '../../CommonComp/URL/UrlKey'


// const moviename='god';
// const seriesname='game';
// const idmbID= tt10580064;
 export const FetchMoviesActionThunk= createAsyncThunk('Movies/FetchMoviesActionThunk',async(mname)=>
                                                                                 {
                                                                                     const response=await BaseUrl.post(`?apikey=${APIKey}&s=${mname}&type=movie`)
                                                                                     return response.data;

                                                                                 })

  export const FetchShowsActionThunk = createAsyncThunk('Movies/FetchShowActionThunk',async(sname)=>
                                                                                  {
                                                                                      const response = await BaseUrl.post(`?apikey=${APIKey}&s=${sname}&type=series`)
                                                                                      console.log(response.data);
                                                                                      return response.data;
                                                                                     
                                                                                  }) 
                                                                                  
  export const FetchMoviesShowsActionThunk=createAsyncThunk('Movies/FetchMoviesShowsActionThunk',async(imdbID)=>
                                                                                {
                                                                                    const response=await BaseUrl.post(`?apikey=${APIKey}&i=${imdbID}&plot=full`)
                                                                                    console.log(response.data);
                                                                                    return response.data;
                                                                                   
                                                                                })   
   
                                                                                
export const FetchEpisodeActionThunk=createAsyncThunk('Movies/FetchEpisodeActionThunk',async(ename)=>
                                                                                {
                                                                                    const response=await BaseUrl.post(`?apikey=${APIKey}&s=${ename}&type=series`)
                                                                                    return response.data;
                                                                                })

const intialstate={
    movies:[],
    shows:[],
    episodes:[],
    movieshowDetails:[]
}
console.log(intialstate.movies);

export const MovieSlice=createSlice(
    {
        name:'Movies',
        initialState:intialstate,
        reducers:{
            //    addMovies(state,action)
            //    {
            //        const actiondata=action.payload
            //     
            //        state.movies=actiondata
                  
            //    }
            ClearMoviesShows(state,action)
            {
                state.movieshowDetails={}
            }
        },
        extraReducers:{
            [FetchMoviesActionThunk.pending]:()=>
            {
                console.log('pending');
            },
            [FetchMoviesActionThunk.fulfilled]:(state,action)=>
            {
                  console.log('fullfilled');
                  return {...state,movies:action.payload}
            },
            [FetchMoviesActionThunk.rejected]:()=>
            {
                console.log('rejected');
            },
            [FetchShowsActionThunk.pending]:()=>
            {
                console.log('pending');
            },
            [FetchShowsActionThunk.fulfilled]:(state,action)=>
            {
                console.log('fullfilled');
                return {...state,shows:action.payload}
            },
            [FetchMoviesShowsActionThunk.pending]:()=>
            {
                console.log('pending');
            },
            [FetchMoviesShowsActionThunk.fulfilled]:(state,action)=>
            {
                console.log('fullfilled');
                return {...state,movieshowDetails:action.payload}
            },
            [FetchEpisodeActionThunk.pending]:()=>
            {
                     console.log('pending');
            },
            [FetchEpisodeActionThunk.fulfilled]:(state,action)=>
            {
                 return {...state,episodes:action.payload}
            }
        }
    }
)

 export default MovieSlice.reducer;
 export const MovieSliceActions=MovieSlice.actions;
