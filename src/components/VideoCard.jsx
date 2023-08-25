import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardMedia, CardContent } from '@mui/material'
import { CheckCircleOutline } from '@mui/icons-material'

import { demoThumbnailUrl, demoChannelTitle, demoVideoTitle, demoVideoUrl, demoChannelUrl } from '../utils/constant'

const VideoCard = ({video :{id: {videoId},snippet}}) => {
  
  return (
     <Card>
        <Link to = {videoId ? `/video/${videoId}` : demoVideoUrl}>
              <CardMedia 
                   image={snippet?.thumbnails?.high?.url}
                   alt={snippet?.title}
                   sx={{width:358, height:180}}
               />
        </Link>

     </Card>
  )
}

export default VideoCard
