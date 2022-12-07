import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
//import Products from "./component/Product/Products";
//import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import { useAlert } from "react-alert";
import Product from "./ProductCard";

const Home = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { error, products } = useSelector(state => state.products);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    }, [dispatch, error, alert]);

    return (
        <Fragment>
            <MetaData title="GO GROCERY"></MetaData>
            <div className="firstHomePage">
                <p>Welcome to <span>GO GROCERY</span></p>
                <h1>VIEW OUR PRODUCTS BELOW</h1>

                <a href="#container">
                    <button>
                        View <CgMouse />
                    </button>
                </a>
            </div>

            <h2 className="productHead">Our Products</h2>

            <div className="container" id="container">

                {products && products.map(product => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
        </Fragment>
    );
};

export default Home;
