import React, { useState, useEffect } from 'react';
import {Button, Box, Grid, Paper} from '@material-ui/core';

const TestCard = (props) => {
    const [testState, setTestState] = useState("TEST")
    const [counter, setCounter] = useState(0)
        //name of state //how to change state //initial value of state

        //dummy function
    const setToZero = () => {
        setTestState(0)
        //setting our state to 0
    }

    const logCoolThings = () => {
        console.log('cool things')
        setCounter(counter + 1)
    }

    return(
        <div>
            <Button variant="contained" color="primary" onClick={() => logCoolThings()}>{testState}</Button>
            You Clicked {counter} times!
            <Grid container spacing={2}>
                <Grid item xs='3'> <Paper variant="outlined" elevation={100}>TEST</Paper></Grid>
                <Grid item xs='6'> <Paper variant="outlined" elevation={100}>TEST</Paper></Grid>
                <Grid item xs='3'> <Paper variant="outlined" elevation={100}>TEST</Paper></Grid>
            </Grid>
        </div>
    )
}

export default TestCard;