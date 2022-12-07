import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";

const categories = [
    "Vegetables",
    "Food",
    "Fruits",
    "Masala, Oil",
    "Chicken, Meat, Fish",
    "Bakery",
];

const Products = ({ match }) => {
    const dispatch = useDispatch();

    const alert = useAlert();

    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0, 2500]);
    const [category, setCategory] = useState("");

    const [ratings, setRatings] = useState(0);

    const {
        products,
        loading,
        error,
        productsCount,
        resultPerPage,
        filteredProductsCount,
    } = useSelector((state) => state.products);

    const keyword = match.params.keyword;

    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    };

    const priceHandler = (event, newPrice) => {
        setPrice(newPrice);
    };
    let count = filteredProductsCount;

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        dispatch(getProduct(keyword, currentPage, price, category, ratings));
    }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

    return (
        <Fragment>
            <MetaData title="ALL PRODUCTS" />
            <h2 className="productsHead">Products</h2>

            <div className="productsall">
                {products &&
                    products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
            </div>

            <div className="filtBox">
                <Typography className="a">Price</Typography>
                <Slider
                    value={price}
                    onChange={priceHandler}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    min={0}
                    max={2500}
                />

                <Typography className="a">Categories</Typography>
                <ul className="category">
                    {categories.map((category) => (
                        <li
                            className="category-link"
                            key={category}
                            onClick={() => setCategory(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </div>
            {resultPerPage < count && (
                <div className="paginationBox">
                    <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={resultPerPage}
                        totalItemsCount={productsCount}
                        onChange={setCurrentPageNo}
                        nextPageText="Next"
                        prevPageText="Prev"
                        firstPageText="1st"
                        lastPageText="Last"
                        itemClass="page-item"
                        linkClass="page-link"
                        activeClass="pageItemActive"
                        activeLinkClass="pageLinkActive"
                    />
                </div>
            )}
        </Fragment>
    );
};

export default Products;
