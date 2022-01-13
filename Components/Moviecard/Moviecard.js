import React from 'react';
import { Link } from 'react-router-dom';
import { FetchMoviesShowsActionThunk } from '../../ReduxComp.js/Slices/MovieSlice';
import './Moviecard.scss';
import { useDispatch } from 'react-redux';

const Moviecard = (props) => {
    
         const {val}=props;

         // console.log(val);
         const{Title,Year,Poster,Type,imdbID}=val
         const Tlen=Title.length;
         // const dispatch = useDispatch()
         
         // dispatch(FetchMoviesShowsActionThunk(imdbID))
    return (
       <>
          <div className='MovieCard'>
          <Link to={`/details/${imdbID}`} style={{textDecoration:'none'}}>
          
          <div className='MovieDisplay'>
          <div>
             {/* <h2>{shortTitle}...</h2> */}
             <h2>{Title}</h2>
          </div>
           
            <img src={Poster} alt='image'></img>
         </div>
          </Link>
         
          
          </div> 
       </>
    )

   
}

export default Moviecard
