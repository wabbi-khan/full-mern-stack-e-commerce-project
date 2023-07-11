import React from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails } from "../../actions/productAction";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard";
import Loading from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
const ProductDetails = ({ match }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  useEffect(() => {
    if (error) {
      alert.error();
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id, error, alert]);
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    value: product.ratings,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className='ProductDetails'>
            <div>
              <Carousel>
                {product.images &&
                  product.images.map((item, index) => (
                    <img
                      className='CarouselImage'
                      key={index}
                      src={item.url}
                      alt={`${index} Slide`}
                    />
                  ))}
              </Carousel>
            </div>
            <div>
              <div className='detailsBlock-1'>
                <h2>{product.name} </h2>
                <p>Product # {product._id}</p>
              </div>
              <div className='detailsBlock-2'>
                <ReactStars {...options} />
                <span> ({product.numOfReviews} Reviews) </span>
              </div>
              <div className='detailsBlock-3'>
                <h1> {`Rs. ${product.price}`} </h1>
                <div className='detailsBlock-3-1'>
                  <div className='detailsBlock-3-1-1'>
                    <button> - </button>
                    <input value='1' type='number' />
                    <button> + </button>
                  </div>
                  <button>Add to Cart</button>
                </div>
                <p>
                  Status:{" "}
                  <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                    {product.stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>
              <div className='detailsBlock-4'>
                Description : <p>{product.description}</p>
              </div>

              <button
                // onClick={submitReviewToggle}
                className='submitReview'
              >
                Submit Review
              </button>
            </div>
          </div>
          <h3 className='reviewsHeading'>REVIEWS</h3>

          {product.reviews && product.reviews[0] ? (
            <div className='reviews'>
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className='noReviews'>No Reviews Yet</p>
          )}
        </>
      )}
    </>
  );
};

export default ProductDetails;
