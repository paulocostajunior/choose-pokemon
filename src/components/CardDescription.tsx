import React from 'react';
import { makeStyles, Card, CardContent, Typography, Divider } from '@material-ui/core';

//#region Props
interface Props {
    description: string;
}
//#endregion

//#region  Style
const useStyles = makeStyles({
    root: {
      minWidth: 200,
      minHeight: 265
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
export default function CardDescription(props: Props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.root}>
          <CardContent>
            <Divider className={classes.divider} />
            <Typography className={classes.cardTitle}>
                Description: {props.description}
            </Typography>
          </CardContent>
      </Card>
    </React.Fragment>
  );
}
//#endregion