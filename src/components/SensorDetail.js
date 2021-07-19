import React from 'react';
import PropTypes from 'prop-types';
import SensorMap from "./SensorMap";
import {makeStyles} from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import sensorsMock from '../sensors.json';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PlaceIcon from '@material-ui/icons/Place';
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
  wrapper: {
    height: '100%',
    maxWidth: '500px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column'
  },
  info: {
    padding: 8
  },
  heading: {
    display: 'flex',
    alignItems: 'center'
  },
  coordinates: {
    color: '#666666',
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});

function SensorDetail(props) {
  const classes = useStyles();

  const sensorId = props.match.params.sensorId;
  const sensor = sensorsMock.find(sensor => sensor.id === sensorId);

  return (
    <Paper className={classes.wrapper}>
      <div className={classes.info}>
        <div className={classes.heading}>
          <Link to={`/`}><IconButton color="primary"><ArrowBackIcon /></IconButton></Link>
          <Typography variant="h6">{sensor.name}</Typography>
        </div>
        <div className={classes.coordinates}>
          <PlaceIcon fontSize="small" />{sensor.coordinates[1]}, {sensor.coordinates[0]}
        </div>
      </div>
      <SensorMap coordinates={sensor.coordinates} />
    </Paper>
  )
}

SensorDetail.propTypes = {
  match: PropTypes.object.isRequired
}

export default SensorDetail;