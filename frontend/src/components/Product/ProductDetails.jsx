import React from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ match }) => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);
  return (
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
      </div>
    </>
  );
};

export default ProductDetails;
