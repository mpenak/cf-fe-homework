import React from 'react';
import PropTypes from 'prop-types';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  link: {
    textDecoration: 'none'
  }
});

function SensorCard(props) {
  const { sensor } = props;
  const classes = useStyles();

  return (
    <Card>
    <CardHeader title={sensor.name}/>
    <CardContent>
      <div>{sensor.description}</div>
    </CardContent>
    <CardActions>
      <Link className={classes.link} to={`/detail/${sensor.id}`}>
        <Button color="primary" variant="outlined" size="small" className={classes.button}>Show on map</Button>
      </Link>
    </CardActions>
  </Card>
  );
}

SensorCard.propTypes = {
  sensor: PropTypes.object.isRequired
}

export default SensorCard;