import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  title: {
    fontSize: 14,
  },
  cardTitle: {
      marginTop: 20,
  },
  media: {
    height: 420,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
          <CardMedia
          className={classes.media}
          image="https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/375px-004Charmander.png"
          title="Charmander"
        />
        <Typography variant="h5" component="h2" className={classes.cardTitle}>Charmander</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Select</Button>
      </CardActions>
    </Card>
  );
}