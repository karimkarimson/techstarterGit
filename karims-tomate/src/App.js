import './App.css';
import React from 'react';
import Timer from './components/Timer';
import Tasklist from './components/Tasklist';
import Grid from '@mui/material/Grid';
function App() {
  return (
    <>
        <h1>Karim's Tomate</h1>
        <Grid
            container
            columns={{ xs: 1, lg: 2 }}
            spacing={4}
            alignItems="center"
            justifyContent="center"
        >
            <Grid item>
            </Grid>
            <Grid item> 
              <Tasklist></Tasklist>
            </Grid>
            <Grid item>
              <Timer></Timer>
            </Grid>
        </Grid>
    </>
  );
}

export default App;
