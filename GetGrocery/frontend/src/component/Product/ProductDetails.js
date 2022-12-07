import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import {
    clearErrors,
    getProductDetails,
    newReview,
} from "../../actions/productAction";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard.js";
import Loader from "../Loader/Loader";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { addItemsToCart } from "../../actions/cartAction";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
} from "@material-ui/core";
import { NEW_REVIEW_RESET } from "../../constants/producrConstants";

const ProductDetails = ({ match }) => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const { product, loading, error } = useSelector(
        (state) => state.productDetails
    );
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        if (product.Stock <= quantity) return;

        const qty = quantity + 1;
        setQuantity(qty);
    };

    const decreaseQuantity = () => {
        if (1 >= quantity) return;

        const qty = quantity - 1;
        setQuantity(qty);
    };

    const addToCartHandler = () => {
        dispatch(addItemsToCart(match.params.id, quantity));
        alert.success("Item Added To Cart");
    };

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        dispatch(getProductDetails(match.params.id));
    }, [dispatch, match.params.id, error, alert]);

    const options = {
        size: "large",
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
    };

    return (
        <Fragment>
            <MetaData title={`${product.name}`} />
            <div className="details">
                <div>
                    {product.images &&
                        product.images.map((item, i) => (
                            <img
                                className="CarouselImage"
                                key={i}
                                src={item.url}
                                alt={`${i} Slide`}
                            />
                        ))}

                </div>

                <div>
                    <div className="details1">
                        <h2>{product.name}         -             {`$${product.price}`}</h2>
                    </div>

                    <div className="details-3">
                        <div className="detailsBlock-3-1">
                            <div className="detailsBlock-3-1-1">
                                <button onClick={decreaseQuantity}>-</button>
                                <input readOnly type="number" value={quantity} />
                                <button onClick={increaseQuantity}>+</button>
                            </div>
                            {<button
                                onClick={addToCartHandler}

                            >
                                Add to Cart
                            </button>}
                        </div>


                    </div>

                    <div className="detailsBlock-4">
                        Description : <p>{product.description}</p>
                    </div>
                </div>
            </div>




        </Fragment>
    );
};

export default ProductDetails;
