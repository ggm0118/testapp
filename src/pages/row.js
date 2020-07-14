import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//<CardMedia className={classes.media} component= "img" image='https://reactimg194502-dev.s3.us-east-2.amazonaws.com/Trucks/Login/rowTrucks.png'></CardMedia>
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: "#ffffff",
            background: "#2196f3",
        },
        media:{
            display: 'flex',
            objectFit: 'contain',
            
        },
        
    }),
);

function FormRow() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction="row" container spacing={2}>
                <Grid item xs={2}>
                    <Paper className={classes.paper} variant="outlined" square>Technico</Paper>
                </Grid>
                <Grid item xs={2}>
                    <Card square>
                        <CardActionArea>
                            
                            
                        <CardMedia className={classes.media} component= "img" image='https://reactimg194502-dev.s3.us-east-2.amazonaws.com/Trucks/Login/rowTrucks.png'></CardMedia>
                         
                        
                        </CardActionArea>
    
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper} variant="outlined" square>FM</Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper} variant="outlined" square>FMX</Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper} variant="outlined" square>VM</Paper>
                </Grid>
            </Grid>
        </div>
      
    );
} export default FormRow;

