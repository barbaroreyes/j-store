import React from 'react';
import { Switch, Route } from "react-router-dom";
// Amplify
import Amplify from "aws-amplify";

// Pages
import Home from "./pages/Home"
import Error from "./pages/Error";
import Jollas from "./pages/Jollas";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import JollaDetails from "./pages/JollaDetails";
import Admin from './pages/Admin';

// Components
import Header from "./components/Header"

// Amplify Configurations
import awsExports from "./aws-exports";
Amplify.configure(awsExports);


const App = () => {
  return (<div>
      <Header />
         <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/jollas">
          <Jollas />
        </Route>
        <Route
          path="/books/:id"
          children={<JollaDetails></JollaDetails>}>
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="*">
          <Error />
        </Route>
  </Switch>
  </div>
    
      
    
  );
}

export default App;

