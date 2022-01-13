import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Pagenotfound from './Components/PageNotFound/Pagenotfound'
import Store  from './ReduxComp.js/Store/Store'
import MovieDetail from './Components/MovieDetail/MovieDetail'
import './MainApp.scss';

const ReduxMovieMainApp = () => {
    return (
       <>
       <Provider store={Store}>
           
           <BrowserRouter>
           <Header/>
           <Switch>
               <Route exact path='/'>
                    <Home/>
               </Route>
               <Route exact path='/details/:imdbID'>
                     <MovieDetail/>
                    
               </Route>
               <Route path='*'>
                  <Pagenotfound/>
               </Route>
           </Switch>
           <Footer/>
           </BrowserRouter>
           
        
          
       </Provider>
          
       </>
    )
}

export default ReduxMovieMainApp
