import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import moviesreducer from '../Slices/MovieSlice'


const Store =configureStore(
    {
        reducer:{moviereducer:moviesreducer}
    }
)

export default Store
