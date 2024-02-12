import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Box } from '@mui/material';
import SearchForm from '../Components/Form';

export default function Home() {
  const [count, setCount] = useState(0);
  const [catData, setCatData] = useState();

  const countLike = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=50');
        setCatData(response.data);
      } catch (error) {
        console.error('Error fetching cat data:', error);
      }
    };
    fetchCatData();
  }, []);
  return (
    <>
      <SearchForm />
      <Box className="box">
        <h1>Random Cat</h1>
        <Card sx={{ maxWidth: 400 }} className='card'>
          <CardHeader />
          {catData &&
            <CardMedia
              component="img"
              height="250"
              image={catData[0].url}
              alt="Paella dish"
              className='card-img'
            />
          }
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              The Cat
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon onClick={countLike} />
            </IconButton>
            <span>{count}</span>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

