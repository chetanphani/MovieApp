import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import Moviecard from '../Moviecard/Moviecard';
import MovieDetail from '../MovieDetail/MovieDetail';
import Slider from 'react-slick';
import { SliderSettings } from '../../CommonComp/Slider/SliderSettings';
import './Movielisting.scss';
import { FetchMoviesActionThunk, FetchShowsActionThunk, MovieSliceActions } from '../../ReduxComp.js/Slices/MovieSlice';

const Movielisting = () => {
    const [searchfilter, setSearchFilter] = useState('');
    const moviesdata=useSelector((state)=>state.moviereducer.movies)
    const showsdata= useSelector(state => state.moviereducer.shows)
    const episodesdata = useSelector(state => state.moviereducer.episodes)
    const dispatch = useDispatch()
    console.log(moviesdata.Search);
    const searchMovies=moviesdata.Search;
    const searchShows=showsdata.Search;
    const searchEpisodes=episodesdata.Search;


    const Filter=(e)=>
    {
        setSearchFilter(e.target.value)
        // dispatch(FetchMoviesActionThunk(searchfilter));
        // dispatch(FetchShowsActionThunk(searchfilter))
    }
    useEffect(() => {
        const mname='harry';
        const sname='game';
        if(searchfilter.length<=0)
        {
            dispatch(FetchMoviesActionThunk(mname));
        dispatch(FetchShowsActionThunk(sname))
        }
        else{
            dispatch(FetchMoviesActionThunk(searchfilter));
            dispatch(FetchShowsActionThunk(searchfilter))
        }
          
    }, [searchfilter])

    let AvailableMovies='';

    AvailableMovies=
                     moviesdata.Response ==='True' ? (searchMovies.filter((val)=>
                     {
                         console.log(val);
                         if(searchfilter === '')
                         {
                             return val
                         }
                         else if(val.Title.toLowerCase().includes(searchfilter.toLowerCase()))
                         {
                         return val
                         }
                         

                         
                     }) .map((val,index)=>
            {
               return <Moviecard key={index} val={val}/>
            })) : (<div style={{color:'red',fontSize:'50px'}}>
                <h3>{moviesdata.Error}</h3>
            </div>)
            console.log(AvailableMovies.length);

      let AvailableShows='';
      
      AvailableShows= showsdata.Response === 'True' ? (searchShows.filter((val)=>
      {
           if(searchfilter==='')
           {
               return val
           }
           else if(val.Title.toLowerCase().includes(searchfilter.toLowerCase()))
           {
               return val;
           }
           else if(val.Title.toLowerCase().includes(searchfilter.toLowerCase()===false))
           {
               return <h1 style={{color:'red',fontSize:'50px'}}>No results Found</h1>
                   
              
           }
      }) .map((val,index)=>
      {
          return <Moviecard key={index} val={val}/>
      }))  : (<div style={{color:'red',fontSize:'50px'}}>
          <h3>{showsdata.Error}</h3>
      </div>)


          let AvailableEpisodes='';

          AvailableEpisodes= episodesdata.Response ==='True'? (searchEpisodes.filter((val)=>
          {
              if(searchfilter==='')
              {
                  return val;
              }
              else if(val.Title.toLowerCase().includes(searchfilter.toLowerCase()))
              {
                  return val;
              }
          }).map((val,ind)=>
          {
              return <Moviecard val={val} key={ind}/>
          })) : <div>
              <h1>{episodesdata.Error}</h1>
          </div>
          
          


    return (
       <>
       <div style={{marginTop:'9px'}}>
       <span style={{color:'darkcyan'}}>Search here</span><input type='search' placeholder='search..' style={{marginLeft:'10px',width:'300px'}} onChange={Filter}></input>
       </div>
      
         <div className='movie-list'>
         
              <h2>Movies</h2>
             <div className='moviecontainer'>
               <Slider {...SliderSettings}>{AvailableMovies}</Slider>
             </div>
         </div>
       
         <div className='show-list'>
             <h2>Shows</h2>
             <div className='Showcontainer'>
                <Slider {...SliderSettings}>{AvailableShows}</Slider>
             </div>
         </div>
         <div className='epiodes-list'>
            <h2>Episodes</h2>
               <div className='Episodecontainer'>
                  <Slider {...SliderSettings}>{AvailableEpisodes}</Slider>
                </div>
         </div>
         
         
           </>
          
    )
}

export default Movielisting
