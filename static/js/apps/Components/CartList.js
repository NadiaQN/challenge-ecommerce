import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ItemList from './ItemList';
import ProductList from './../../../../data/mock';


class CartList extends Component {
    constructor() {
        super();
        this.state = {
            cart: null
        }
    }


    render() {
        return(
            <div>
                <div className='total'>
                    TOTAL:
                </div>
                <div className='cart-item'>

                </div>
            </div>
        )
    }
}

export default CartList;