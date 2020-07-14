import React from "react";
import {} from 'react-bootstrap';
import { Grid} from '@material-ui/core';
import Header from "./header.jsx";
import FormRows from "./row.js";




function MainPage () {
    
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item xs={12}>
                <FormRows />
            </Grid>
            <Grid item xs={12}>
                
            </Grid>
        </Grid>
            
    );
  }; export default MainPage;