import React, { useEffect, useState } from 'react'
import getNews from '../Services/Api'
import Article from './Article';
import {Box }from '@mui/material';

const Articles = () => {
  const [ news , setNews] = useState([]);

    useEffect(() => {
        daliyNews()
    } , [])

    const daliyNews = async() => {
        const response = await getNews();
        //  console.log(response.data)
        setNews(response.data)
    }
  return (
     <Box>
      {
        news.map((data) => {
          return (
            <Article data={data} />
          )
        })
      }
     </Box>    
  )
}

export default Articles