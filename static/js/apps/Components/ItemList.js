import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductList from './../../../../data/mock';
import CartList from './CartList';



class ItemList extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            ProductList.catalog.map((Product) =>
                <div className='product' key={Product.id}>
                    <img src={Product.imageURL} />
                    <h4>{Product.name}</h4>
                    <p>{Product.currency}{Product.price}</p>
                    <button className='btn' onClick={this.addProduct = () => {
                        
                    }}>Add to cart</button>
                </div>
            )
        )
    }
}

export default ItemList;