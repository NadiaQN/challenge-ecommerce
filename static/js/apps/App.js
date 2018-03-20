import React from 'react';
import ReactDOM from 'react-dom';
import CartList from './Components/CartList';
import ItemList from './Components/ItemList';


const App = () => {
    return (
        <div>
            <div className='cart-container'>
                <CartList />
            </div>
            <div className='product-container'>
                <ItemList/>
            </div>
        </div>
    )
}

export default App;