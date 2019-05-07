import React from 'react';
import './App.css';
import MainNav from './Components/NavWrapper';
import { Route } from 'react-router-dom';

import Home from './Components/Home';
import Mac from './Components/Mac';

import data from './data';
import Ipad from './Components/iPad';
import Iphone from './Components/iPhone';
import Watch from './Components/Watch';
import TV from './Components/TV';
import Music from './Components/Music';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }

  componentDidMount = () => {
    this.setState({
      items: data
    })
  }



  render() {
  return (
    <div>
    <MainNav />
    <Route exact path ='/' component={Home} />
    <Route exact path ='/mac' component={Mac} />
    <Route exact path ='/ipad' component={Ipad} />
    <Route exact path ='/iphone' component={Iphone} />
    <Route exact path ='/watch' component={Watch} />
    <Route exact path ='/tv' component={TV} />
    <Route exact path ='/music' component={Music} />
    </div>
  );
}
}
export default App;
