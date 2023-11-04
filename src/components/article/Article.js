import React, { useState } from 'react';
import './Article.css';
import { Box, Button, Card, Divider, Grid, Typography, CardContent, CardActions } from '@mui/material';
import { places } from '../../data';
import PlaceIcon from '@mui/icons-material/Place';
import ArticleIcon from '@mui/icons-material/Article';



const Article = () => {

  const mappedInitialState = places.map(x => 1);

  const [count, setCount] = useState(mappedInitialState);

  const increasePerson = (index) => {
    const newCount = [...count];
    newCount[index] = newCount[index] + 1;
    setCount(newCount);
    // console.log(count)
    
  };

  const decreasePerson = (index) => {
    if(count[index] > 1) {
      const newCount = [...count];
      newCount[index] = newCount[index] - 1;
      setCount(newCount);
    console.log(count)

    }
    
  };

  return (
    <div className="main">
      <Grid container className="main-grid">
        {places.map((u, index) => (
          <Card className="main-card" key={index}>
            <img src={u.image} alt="" width="100%" height="200px" />
            <CardContent className="main-content">
              <Box className="main-b1">
                <Typography variant="h6">{u.destTitle}</Typography>
                <Box className="main-b2">
                  <PlaceIcon />
                  <Typography variant="caption">{u.location}</Typography>
                </Box>
              </Box>
              <Divider />

              <Box className="main-b3">
                <Typography variant="h6">{u.grade} </Typography>
                  <Button variant="outlined" size="small" onClick={() => increasePerson(index)}>+</Button>
                  <Button variant="outlined" size="small">{count[index]}</Button>
                  <Button variant="outlined" size="small" onClick={() => decreasePerson(index)}>-</Button>
                <Typography>${u.fees * count[index]}</Typography>
              </Box>

              <Divider />
              <Typography variant="p">{u.description}</Typography>
              <CardActions>
                <Button variant="outlined">
                  Details
                  <ArticleIcon />
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default Article;
