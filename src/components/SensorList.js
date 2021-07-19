import React from 'react';
import sensorsMock from '../sensors.json';
import Grid from "@material-ui/core/Grid";
import SensorCard from "./SensorCard";

function SensorList() {
  return (
    <Grid container spacing={3}>
      {sensorsMock.map(sensor => (
        <Grid key={sensor.id} item xs={12} sm={6} md={3}>
          <SensorCard sensor={sensor} />
        </Grid>
      ))}
    </Grid>
  )
}

export default SensorList;