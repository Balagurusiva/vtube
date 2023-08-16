import React from 'react'
import { Search } from '@mui/icons-material'
import { Paper, IconButton } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () =>  (
  <Paper
    component='form'
    onSubmit={() => {}}
    sx= {{
      borderRadius:20,
      border:'1px solid #e3e3e3',
      pl:2,
      boxShadow:'none',
      mr: {sm: 5}
    }}
  >
    <input 
      className='search-bar'
      placeholder='search'
      value=""
      onChange={() => {}}
    />
    <IconButton type='submit' sx={{p:'10px', color:'red'}}>
      <Search/>
    </IconButton>
    
  </Paper>
)

export default SearchBar
