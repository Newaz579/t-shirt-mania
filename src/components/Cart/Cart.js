import React from 'react';
import TShirt from '../TShirt/TShirt';
import './Cart.css';

const Cart = ({ cart, handleRemoveItem }) => {
    let message;
    if(cart.length === 0){
        
            message = <p>Please Buy at least one item.</p>
        
    }
    else{
        message = <p>Thanks for buying.</p>
    }
    return (
        <div>
            <h3 className={cart.length ===2 ? `orange` : 'purple'}>Order Summary...</h3> 
            {/* className er modde jeta kora hoise eita css class k conditional rendering kora */}
            <h5 className={`bold ${cart.length === 2 ? 'blue' : 'yellow'}`}>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => {handleRemoveItem(tshirt)}}>X</button>
                </p>)
            }
            {
                    message
            }
            {cart.length === 2 && <h2>Double Item.</h2>}
            {cart.length === 4 || <p>Not Four Items.</p>}
        </div>
    );
};

export default Cart;

/*
Conditional Rendering:
1. Use element in a variable and then use if-else to set value;
2. ternary operation condition ? true : false
3. && operator (if condition is true, I want to display something)
4. || operator (if condition in false, I want to display something)
*/