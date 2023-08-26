import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardMedia, CardContent } from '@mui/material'
import { CheckCircleOutline, TypeSpecimen } from '@mui/icons-material'

import { demoThumbnailUrl, demoChannelTitle, demoVideoTitle, demoVideoUrl, demoChannelUrl } from '../utils/constant'

const VideoCard = ({video :{id: {videoId},snippet}}) => {
  
  return (
     <Card sx={{width:{md:'320px', xs:'100%'},boxShadow:'none', borderRadius:0}}>
        <Link to = {videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{width:358, height:180}}/>
        </Link>
        <CardContent sx={{backgroundColor:'#000', height:'110px'}}>
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
