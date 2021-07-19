import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MapService from "../Map.service";

const MAP_ID = 'sensor-map';

const styles = {
  map: {
    height: 400
  }
}

class SensorMap extends Component {
  componentDidMount() {
    const { coordinates } = this.props;
    this.map = MapService.initializeMapWithPoint(MAP_ID, coordinates);
  }

  render() {
    const { classes } = this.props;
    return (
      <div id={MAP_ID} className={classes.map} />
    )
  }
}

SensorMap.propTypes = {
  classes: PropTypes.object.isRequired,
  coordinates: PropTypes.array.isRequired
}

export default withStyles(styles)(SensorMap);