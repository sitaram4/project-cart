import React from 'react';

const CartItem = (props) =>{
        const {price,title,qty,id,img} = props.product;
        const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct} = props
        return (
            <div className = "cart-item">
                <div className = "left-block">
                    <img style={style.image} src={img}/>
                </div>
                <div className="right-block">
                    <div style ={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty:{qty}</div>
                    <div style={{color:'#777'}}>id:{id}</div>
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
                                    onClick = {() =>onIncreaseQuantity(product)}/>
                        <img alt="decrease" 
                            className = "action-icons" 
                                src="https://image.flaticon.com/icons/png/512/860/860821.png" 
                                onClick = {() => onDecreaseQuantity(product)}/>
                        <img alt="delete" 
                            className = "action-icons" 
                            src="https://image.flaticon.com/icons/png/512/3096/3096687.png"
                            onClick = {() =>onDeleteProduct(product.id)}
                            />
                    </div>
                </div>
                
            </div>
        )
    
    
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