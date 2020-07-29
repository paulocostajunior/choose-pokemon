import React, { useState, useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { Divider } from '@material-ui/core';
import { Link, Router } from 'react-router-dom';
import history from '../history';
import { useParams } from 'react-router';


const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  title: {
    fontSize: 14,
  },
  cardTitle: {
      marginTop: 20,
      textAlign: "center",
      fontFamily: "'Press Start 2P', cursive;"
  },
  media: {
    height: 170,
    width: 170,
    margin: "auto"
  },
  divider: {
    marginTop: 10
  }
});

export default function SimpleCard(props: any) {
  const classes = useStyles();
  let link;

  let { name, img } = useParams();
  if (!name && !img) {
    link = <Link style={{margin: "auto"}} to={`/pokemon/${props.name}/${props.img}`}>Select</Link>
  }

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardContent>
            <CardMedia
              className={classes.media}
              image={require(`../assets/${props.img}.png`)}
              title={props.name}
            />
          <Divider className={classes.divider} />
          <Typography className={classes.cardTitle}>
            {props.name}
          </Typography>
        </CardContent>
        <CardActions>
          {link}
        </CardActions>
      </Card>
    </React.Fragment>
  );
}