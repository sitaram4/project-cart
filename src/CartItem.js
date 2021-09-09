import React from 'react';

class CartItem extends React.Component{
    
    // increaseQuantity(){
    //     console.log('this.state:    ' , this.state);
    // }
    // 3rd way
    increaseQuantity = () =>{
        console.log('this.state ' , this.state);
        // this.state.qty +=1;//doesn't show on view
        //setState form 1
        // this.setState({
        //     qty:this.state.qty+1
        // })

        //setState form 2 -  if prev state required use this
        this.setState((prevState) =>{
            return {
                qty:prevState.qty+1
            }
        })
        
    }
    decreaseQuantity = () =>{
        console.log('this.state',this.state);
        const {qty} = this.state;
        if(qty==0){
            return ;
        }
        this.setState((prevState) =>{
            return {
                qty:prevState.qty-1
            }
        },() =>{
            console.log("call back function");
        })
    }
    testing(){
        const promise = new Promise((resolve,reject) =>{
            setTimeout(() =>{
                resolve('done');
            },5000);
        })

        promise.then(() =>{
            this.setState({qty:this.state.qty+10});
            this.setState({qty:this.state.qty+10});
            this.setState({qty:this.state.qty+10});
            console.log('state',this.state)
        });
    }
    render(){
        console.log('props',this.props)
        // const {price,title,qty} = this.state;
        const {price,title,qty} = this.props.product;
        
        return (
            <div className = "cart-item">
                <div className = "left-block">
                    <img style={style.image}/>
                </div>
                <div className="right-block">
                    <div style ={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty:{qty}</div>
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
                        <img alt="decrease" 
                            className = "action-icons" 
                                src="https://image.flaticon.com/icons/png/512/860/860821.png" onClick = {this.decreaseQuantity}/>
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