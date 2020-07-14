import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 200
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

function FmCard() {
  const classes = useStyles();
    
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
         Tecnico
        </Typography>
      </CardContent>
      
    </Card>
  );
} export default FmCard;
