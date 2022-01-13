import React,{useEffect} from 'react';
import './MovieDetail.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { FetchMoviesShowsActionThunk, MovieSliceActions } from '../../ReduxComp.js/Slices/MovieSlice';
// import { objectTraps } from '@reduxjs/toolkit/node_modules/immer/dist/internal';

const MovieDetail = () => {
    const details = useSelector(state => state.moviereducer.movieshowDetails)
    console.log(details);
    // console.log(Object.keys(details).length)
    const{Title,Director,Released,Actors,Plot,Poster,Genre,Language,Runtime,imdbRating}=details;
    const {imdbID}=useParams();
    console.log(imdbID);

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(FetchMoviesShowsActionThunk(imdbID))

       return ()=>
       {
           dispatch(MovieSliceActions.ClearMoviesShows())
       }
    }, [imdbID])
    
    return(
        <>
        {Object.keys(details).length <= 0 ? <div>
        <h1 style={{color:'white'}}>Loading...</h1></div> :
            <div className='MovieDetails'>
               <div className='poster'>
                     <img src={Poster}></img>
                 </div>
                <h1>{Title}</h1><br/>
                 <div className='Details'>
                   <p>Released : {Released} {'\u00A0'} Runtime : {Runtime}  {'\u00A0'}  ImdbRating : {imdbRating}</p>
                 </div>
                 <div className='plot'>
                     <p>{Plot}</p>
                 </div>
                 <div className='Details2'> '
                     <span className='span2'><span className='span1'>Director</span>  : {Director}</span> <br/>
                    <span className='span2'> <span className='span1'>Cast</span>: {Actors}</span> <br/>
                     <span className='span2'><span className='span1'>Genre</span> : {Genre}</span> <br/>
                     <span className='span2'><span className='span1'>Language</span> : {Language}</span>
                 </div>
                
            

            </div>
        }
            
        </>
    )
}
    
   

export default MovieDetail
