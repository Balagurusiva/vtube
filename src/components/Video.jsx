import React from 'react'
import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from './index'

const Video = ({videos}) => {
  console.log(videos)
  
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
         {videos.map((item, idx)=>(
          <Box key={idx}>
            {item.id.channelId && <ChannelCard  channel ={item}/>}
            {item.id.videoId && <VideoCard  video={item}/>}
           </Box>
         ))}
    </Stack>
    
  )
}

export default Video
