import logo from './logo.svg';
import CartItem from './CartItem';
import Navbar from './Navbar'
import Cart from './Cart';
import React from 'react';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products:[
            {
                price:99,
                title:'Mobile Phone',
                qty:1,
                img:'',
                id:1
            },
            {
                price:999,
                title:'Watch',
                qty:1,
                img:'',
                id:2
            },
            {
                price:9999,
                title:'Laptop',
                qty:1,
                img:'',
                id:3
            }
        ]
    }
    // this.testing();
    // 2nd way
    // this.increaseQuantity=this.increaseQuantity.bind(this)
}

handleIncreaseQuantity = (product) => {
    console.log('Hey Increase the qty of',product);
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty +=1;
    this.setState({
        products:products
    })
}
handleDecreaseQuantity = (product) => {
    console.log('Decrease Quantity');
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0){
        return;
    }
    products[index].qty -=1;
    this.setState({
        products:products
    })
}
handleDeleteProduct = (id) =>{
    console.log('delete product');
    const {products} = this.state;
    const items = products.filter((item) => item.id!=id);
    this.setState({
        products:items
    })
}
getCartCount = () => {
  const {products} = this.state;
  let count =0;
  products.forEach((product) => {
    count += product.qty;
  })
  return count;
}
getCartTotal = () =>{
  const {products} = this.state;
  let cartTotal = 0;
  products.map((product) =>{
    cartTotal += product.qty*product.price;
  })
  return cartTotal;
}
  render() {
    const {products} = this.state
    return (
    <div className="App">
      <Navbar count = {this.getCartCount()}/>
      <Cart
      products = {products}
      onIncreaseQuantity = {this.handleIncreaseQuantity}
      onDecreaseQuantity = {this.handleDecreaseQuantity}
      onDeleteProduct = {this.handleDeleteProduct}
      />
      <div style={{fontSize:20,padding:10}}> TOTAL: {this.getCartTotal()}</div>
    </div>
    
  );
}}

export default App;
