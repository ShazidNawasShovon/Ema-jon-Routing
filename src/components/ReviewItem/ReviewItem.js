import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewItem = (props) => {
    const {img,name,price,quantity,key}=props.product
    const {handleRemove}=props
    return (
        <div className="product">
        <div>
            <img src={img} alt="" />
        </div>
        <div>
            <h4 className="product-name">{name}</h4>
            
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <button
                onClick={()=>handleRemove(key)}
                className="btn-regular"
            ><FontAwesomeIcon icon={faShoppingCart} /> Remove Item</button>
        </div>
    </div>
    );
};

export default ReviewItem;