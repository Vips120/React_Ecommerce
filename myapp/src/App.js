import React,{Component} from 'react';
import Headercomponent from './components/header/header.component';
import Shop from './components/shops/shop.component';
import { Container } from 'react-bootstrap';
import {BrowserRouter,Switch,Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <React.Fragment>
          <BrowserRouter>
        <Headercomponent />
      
      
        <Container style={{ marginTop: "90px" }}>
         
         
              <Route path="/" exact component={Shop} />
              <Route path="/shop" exact component={Shop}/>
           
         
        {/* <Shop/> */}
            </Container>
         
          </BrowserRouter>
            </React.Fragment>
          )
        }
}

export default App;
