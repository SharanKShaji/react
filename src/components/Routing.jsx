import React from "react";
import {Switch,Route} from "react-router-dom";
import Cart from "./Cart/Cart";
import Main from "./Main/Main";
import Order from "./Order/Order";
import { Profile } from "./Profile/Profile";
import  {Prime}  from "./Prime/Prime";


const Routing = () => {
  return (

    <div>
      <Switch>
        <Route exact path='/home/'>
          <Main></Main>
        </Route>
        <Route path="/home/Order">
            <Order></Order>
        </Route>
        <Route exact path="/home/Cart">
          <Cart></Cart>
        </Route>
        <Route  path="/home/Profile">
            <Profile></Profile>
        </Route>
        <Route exact path="/home/Prime">
          <Prime></Prime>
        </Route>    
      </Switch>
    </div>

  );
};

export default Routing;
