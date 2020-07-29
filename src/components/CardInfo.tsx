import React from 'react';
import { useParams } from 'react-router';
import { Container, Grid, Button, makeStyles, Paper } from '@material-ui/core';
import Card from './Card';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  navigate: {
    marginTop: 15,
  }
});
function CardInfo() {
  const classes = useStyles();
  let { name, img } = useParams();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card name={name} img={img} />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
        </Grid>
      </Grid>
      <Container maxWidth="lg" className={classes.navigate}>
        <Link style={{margin: "auto"}} to={"/"}>Go Back</Link>
        {/* <Link className={classes.mr4} to={"/"}>Register</Link> */}
      </Container>
    </Container>
  );
}

export default CardInfo;