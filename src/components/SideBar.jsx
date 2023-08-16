import React from 'react'
import { Stack } from '@mui/material'

import { categories } from '../utils/constant'

const selectedCategory = 'New'

const SideBar = () =>  (
    <Stack
      direction='row'
      sx={{
        overflow:'auto',
        height:{ sx:'auto', md:'95%'},
        flexDirection:{md:'column'}
      }}
    > 
        {categories.map((categories) =>(
            <button className='category-btn'
                    style={{
                        background:categories.name ===
                          selectedCategory && '#FC1503',
                          color:'white'
                    }}
                    key={categories.name}
             >
                <span style= {{color:categories.name === selectedCategory ? 'white': 'red', marginRight:'15px'}}>{categories.icon}</span>
                <span style= {{opacity: categories.name === selectedCategory ? '1': '0.8'}}>{categories.name}</span>
            </button>
        )
        )}

    </Stack>

)


export default SideBar
