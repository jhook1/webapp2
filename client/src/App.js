import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Redirect to='/'/>
      </Switch>
    </div>
  );
}

export default App;

//import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />