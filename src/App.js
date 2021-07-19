import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SensorDetail from "./components/SensorDetail";
import SensorList from "./components/SensorList";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 1200,
    padding: 16,
    backgroundColor: '#F6F6F6',
    margin: 'auto'
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Switch>
          <Route
            path="/detail/:sensorId"
            render={routerProps => <SensorDetail {...routerProps} />}
          />
          <Route path="/">
            <SensorList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
