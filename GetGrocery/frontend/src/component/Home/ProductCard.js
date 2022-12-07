import React, { Fragment } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {

    const options = {
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
    };
    return (

        <Link className="prodCard" to={`/product/${product._id}`}>
            <img src={product.images[0].url} alt={product.name} />
            <div className="prodCard1">
                <p>{product.name}-</p>
                <span>{`$${product.price}`}</span>
            </div>
        </Link>


    );
};

export default ProductCard;
