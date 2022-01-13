import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import BaseUrl from '../../CommonComp/URL/BaseUrl';
import {APIKey} from '../../CommonComp/URL/UrlKey';
import { FetchEpisodeActionThunk, FetchMoviesActionThunk, FetchShowsActionThunk, MovieSliceActions } from '../../ReduxComp.js/Slices/MovieSlice';
import Movielisting from '../MovieListing/Movielisting';

const Home = () => {
    document.title='10+5'
    const dispatch = useDispatch()
    useEffect(() => {
        const mname='bad';
        const sname='bad';
        const ename='bad';
        // const FetchMovies=async()=>
        // {
        //        const response= await BaseUrl.get(`?apiKey=${APIKey}&s=${moviename}&type=movie`);
        //        console.log(response.data);
        //        dispatch(MovieSliceActions.addMovies(response.data))
        // }
        // FetchMovies();
       dispatch(FetchMoviesActionThunk(mname))
       dispatch(FetchShowsActionThunk(sname));
       dispatch(FetchEpisodeActionThunk(ename))
    }, [dispatch])
    return (
       <>
         
           <Movielisting/>
          
           
       </>
    )
}

export default Home
