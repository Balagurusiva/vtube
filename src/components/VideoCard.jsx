import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardMedia, CardContent } from '@mui/material'
import { CheckCircleOutline, TypeSpecimen } from '@mui/icons-material'

import { demoThumbnailUrl, demoChannelTitle, demoVideoTitle, demoVideoUrl, demoChannelUrl } from '../utils/constant'

const VideoCard = ({video :{id: {videoId},snippet}}) => {

   console.log(videoId)
  
  return (
     <Card sx={{width:{  xs: '100%', sm: '358px', md: "320px",},boxShadow:'none', borderRadius:0}}>
        <Link to = {videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} />
        </Link>
        <CardContent sx={{backgroundColor:'#1e1e1e', height:'80px'}}>
               <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
                  <Typography  varient="subtitle1" fontWeight="bold" color="#fff">
                     {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                  </Typography>
                </Link>
               <Link to ={snippet?.channelId ? `/channel/${snippet?.chennalId}` : demoChannelUrl}>
                  <Typography varient="subtitle2" color='gray' fontWeight='bold'>
                     {snippet?.chennalTitle || demoChannelTitle}
                     <CheckCircleOutline  sx={{FontSize:12, color:'gray', ml:'5px',mb:'-5px'}}/>
                  </Typography>
               </Link>
        </CardContent>

     </Card>
  )
}

export default VideoCard
