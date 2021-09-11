import logo from './logo.svg';
import CartItem from './CartItem';
import Navbar from './Navbar'
import Cart from './Cart';
import React from 'react';
import  firebase from "firebase/compat/app";
import "firebase/compat/firestore"


class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products:[],
        loading:true
    }
    this.db = firebase.firestore();
    // this.testing();
    // 2nd way
    // this.increaseQuantity=this.increaseQuantity.bind(this)
}
componentDidMount(){
  this.db
    .collection('products')
    // .get()
    .onSnapshot((snapshot) =>{
      console.log(snapshot);
      snapshot.docs.map((doc) =>{
        console.log(doc.data());
      })
      const products = snapshot.docs.map((doc) =>{
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })
  
      this.setState({
        products:products,
        loading:false
      })
    })
    
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
        products:items,
        
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
addProduct = () =>{
  this.db
  .collection('products')
  .add({
    img:'',
    price:900,
    qty:3,
    title:'Washing Machine'
  }).then((docRef) => {
    console.log('Product has been added',docRef);
  }).catch((error) =>{
    console.log('Error: ',error)
  })
}
  render() {
    const {products,loading} = this.state
    return (
    <div className="App">
      <Navbar count = {this.getCartCount()}/>
      <button onClick={this.addProduct}>Add a Product</button>
      <Cart
      products = {products}
      onIncreaseQuantity = {this.handleIncreaseQuantity}
      onDecreaseQuantity = {this.handleDecreaseQuantity}
      onDeleteProduct = {this.handleDeleteProduct}
      />
      {loading && <h1>Loading Products ...</h1>}
      <div style={{fontSize:20,padding:10}}> TOTAL: {this.getCartTotal()}</div>
    </div>
    
  );
}}

export default App;
