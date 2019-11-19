import React,{Component} from 'react';
import Headercomponent from './components/header/header.component';
import Shop from './components/shops/shop.component';
import Product from './components/shopproduct/product.component';
import { Container } from 'react-bootstrap';
import {Router,Switch,Route } from 'react-router-dom';
import Logincomponent from './components/login/login.component';
import { history } from './redux/helpers/history';
import Privateroute from '../src/redux/helpers/privateroute';
import Cart from './components/cart/cart';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <Headercomponent />
          <Container style={{ marginTop: "90px" }}>
            <Switch>
              <Privateroute exact path="/" component={Shop}/>
            {/* <Route path="/" exact component={Logincomponent} /> */}
            <Privateroute exact path="/shop" component={Shop}/>
              <Route path="/Login" component={Logincomponent} />
              <Route path="/product/:id" exact component={Product} />
              <Route path="/cart" component={Cart}/>
            </Switch>
          </Container>
          </Router>
            </React.Fragment>
          )
        }
}

export default App;
