import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MediaCard from '../components/Card';
import Card from '../components/Card'
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  
})

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Box justifyContent="center">
        <h2>Choose your Pokémon</h2>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
