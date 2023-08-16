import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {NavBar, Feed, VideoDetail, ChennalDetail, SearchFeed}   from  './components'
 


const App = () =>  (
   <BrowserRouter>
      <Box sx={{backgroundColor:"#000"}}>
       <NavBar />
       <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChennalDetail />} />
          <Route path='/serach/:serachTerm' element={<SearchFeed />} />
       </Routes>
      </Box>
   </BrowserRouter>

)
     
export default App

