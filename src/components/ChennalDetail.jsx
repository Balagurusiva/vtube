import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Video, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();
  console.log(id)

  useEffect(() => {
     fetchFromAPI(`channels?part=snippet&id=${id}`)
        .then((data) => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
       .then((data)=> setVideos(data?.items))
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'150px',
          background: 'linear-gradient(90deg, rgba(0,148,247,1) 0%, rgba(206,100,284,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Video videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
