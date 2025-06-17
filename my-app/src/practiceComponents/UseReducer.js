import React, { useReducer } from 'react';


const products = [
    { id: 1, name: "apple" },
    { id: 2, name: "banana" },
    { id: 3, name: "mango" }
];

// Reducer function
function cartReducer(state, action) {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                cart: [...state.cart, action.payload] // 🟢 add new product to cart
            };

        case 'remove':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id) // 🟢 remove by id
            };

        case 'empty':
            return {
                ...state,
                cart: [] 
            };

        default:
            return state;
    }
}

// Component
export default function CartWithReducer() {
    const [state, dispatch] = useReducer(cartReducer, { cart: [] });

    return (
        <div style={{ padding: '20px' }}>
            <h2>Products</h2>
            {products.map(prod => (
                <div key={prod.id} >
                    <span>{prod.name}</span>
                    <button onClick={() => dispatch({ type: 'add', payload: prod })} >
                        Add to Cart
                    </button>
                </div>
            ))}

            <hr />

            <h2>Cart Items</h2>
            {state.cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                state.cart.map(item => (
                    <div key={item.id}>
                        <span>{item.name}</span>
                        <button onClick={() => dispatch({ type: 'remove', payload: item })}>
                            Remove
                        </button>
                    </div>
                ))
            )}

            <hr />
            <button onClick={() => dispatch({ type: 'empty' })}>Clear Cart</button>
        </div>
    );
}
