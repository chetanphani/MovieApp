import React from 'react'
import axios from 'axios'

export default axios.create(
    {
        baseURL: 'http://www.omdbapi.com/'
    }
)

// export default BaseUrl
