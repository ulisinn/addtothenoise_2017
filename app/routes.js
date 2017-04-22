/**
 * Created by ulrichsinn on 03/09/2017.
 */

import React from 'react';
import {IndexRoute, Route} from 'react-router';

import Main from './components/main';
import SplashScreen from './components/splash';
import About from './components/about';
import Oped from './components/oped';
import PortfolioMaster from './components/portfolio_master';
import PortfolioDetailAll from './components/portfolio_detail_all';
import PortfolioDetailMusic from './components/portfolio_detail_music';


export default (
  <Route path="/" component={Main}>
    <IndexRoute component={SplashScreen}/>
    <Route path="/about" component={About}/>
    <Route path="/oped" component={Oped}/>
    <Route path="/portfolio" component={PortfolioMaster}/>
    <Route path="/print" component={PortfolioMaster}/>
    <Route path="/web" component={PortfolioMaster}/>
    <Route path="/other" component={PortfolioMaster}/>
    <Route path="/music" component={PortfolioMaster}/>
    <Route path="/portfolio/:postId" component={PortfolioDetailAll}/>
    <Route path="/music/:postId" component={PortfolioDetailMusic}/>
    <Route path="*" component={SplashScreen}/>
  </Route>
);
