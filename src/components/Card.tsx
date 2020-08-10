import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { Divider, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { IPokemon } from '../models/IPokemon';

interface Props {
  pokemon: IPokemon;
  showLink: boolean;
}
//#endregion

//#region Style
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
//#endregion

//#region Component
export default function SimpleCard(props: Props) {
  const classes = useStyles();
  let link;

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardContent>
            <CardMedia
              className={classes.media}
              image={require(`../assets/${props.pokemon.img}.png`)}
              title={props.pokemon.name}
            />
          <Divider className={classes.divider} />
          <Typography className={classes.cardTitle}>
            {props.pokemon.name}
          </Typography>
        </CardContent>
        {
        props.showLink 
          ? 
          <CardActions>
            <Button href={`/pokemon/${props.pokemon.id}`} style={{margin: "auto"}} variant="outlined" color="primary">
              Select
            </Button>
          </CardActions>
          : null
        }
      </Card>
    </React.Fragment>
  );
}
//#endregion