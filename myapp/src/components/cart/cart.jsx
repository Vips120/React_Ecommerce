import React, { Component } from 'react';
import { Container, Col, Row ,Table,Spinner,Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { removecartItem, addQuantity, removeQuantity } from '../../redux/action/shop/shop.action';
import { selectCarteItemsCount,selectCartItems } from './cart.selector'; 
class Cart extends Component {
    componentDidMount() { }
    RemoveCartItem = (item) => {
        console.log(item);
        this.props.removecartItem(item);
    };
    render() {
        if (!this.props.data) { return null; }
        if (this.props.loading) { return <Spinner animation="border" /> }
        return (
            <Container >
               
                <Row>
                    <Col md={8}>
                        {

                            this.props.data.items.length > 0 ? 
                                <React.Fragment>
                                      
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>EmailId</th>
                                    <th>Price </th>
                                    <th>quantity</th>
                                    <th>TotalPrice</th>
                                </tr>
                            </thead>
                               <tbody >
                              
                              {this.props.data.items.map(item => (
                                 
                                 <tr key={item.data._id}>
                                 <td>{item.data._id}</td>
                                     <td>{item.data.FirstName}</td>
                                     <td>{item.data.LastName}</td>
                                     <td>{item.data.EmailId}</td>
                                 <td>{item.data.price}</td>
                                         <td>
                                             <i className="fa fa-chevron-circle-left" aria-hidden="true"
                                             onClick={() => this.props.removeQuantity(item.data)}
                                             ></i>
                                             &nbsp;
                                             {item.quantity}
                                             &nbsp;
                                             <i className="fa fa-chevron-circle-right" aria-hidden="true"
                                              onClick={() => this.props.addQuantity(item.data)}
                                             ></i>
                                 </td>
                                 <td>
                                    {item.quantity * item.data.price} 
                                 </td>
                                 <td>
                                     <Button type="button" className="btn btn-danger btn-md"
                                      onClick={() => this.RemoveCartItem(item.data)}
                                     >REMOVE</Button> 
                                     </td>
                                  </tr>
                              ))
                            } 
                                        </tbody>
                                                                                  
                                    </Table>
                                    <hr/>
                                    <Button type="button" className="btn btn-danger btn-md">Checkout</Button>
                                    
                                    <span >
                                        
                                   < h2 align="right">{` $TotalPRICE:${this.props.totalitem}`}</h2>
                                    </span>  
                                    
                                   </React.Fragment>
                                
                                    :
                                        <h1>ADD TO CART FIRST</h1>
                                    
                                 
                            }
                      
                              
                    </Col>
                </Row>
               
            </Container>
        );
        }
         
    }
const mapStateToProps = (state) => {
    console.log(state);
    return {
        data: state.cart, loading: state.loading,
         totalitem: state.cart.items.reduce((preValue,nextValue) => preValue  + nextValue.quantity * nextValue.data.price, 0)
    }
}
export default connect(mapStateToProps, {removecartItem,addQuantity,removeQuantity})(Cart);