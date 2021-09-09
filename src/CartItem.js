import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price:99,
            title:'Mobile Phone',
            qty:1,
            img:''
        }
        // 2nd way
        // this.increaseQuantity=this.increaseQuantity.bind(this)
    }
    // increaseQuantity(){
    //     console.log('this.state:    ' , this.state);
    // }
    // 3rd way
    increaseQuantity = () =>{
        console.log('this.state ' , this.state)
    }
    render(){
        const {price,title,qty} = this.state;
        return (
            <div className = "cart-item">
                <div className = "left-block">
                    <img style={style.image}/>
                </div>
                <div className="right-block">
                    <div style ={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>{price}</div>
                    <div style={{color:'#777'}}>{qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons  */}
                        {/* Bind{1st way} */}
                        {/* <img alt="increase" 
                            className = "action-icons" 
                                src="https://image.flaticon.com/icons/png/512/1828/1828925.png" 
                                    onClick = {this.increaseQuantity.bind(this)}/> */}
                        <img alt="increase" 
                            className = "action-icons" 
                                src="https://image.flaticon.com/icons/png/512/1828/1828925.png" 
                                    onClick = {this.increaseQuantity}/>
                        <img alt="decrease" className = "action-icons" src="https://image.flaticon.com/icons/png/512/860/860821.png"/>
                        <img alt="delete" className = "action-icons" src="https://image.flaticon.com/icons/png/512/3096/3096687.png"/>
                    </div>
                </div>
                
            </div>
        )
    }
    
}
const style = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;