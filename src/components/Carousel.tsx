import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { addToCart } from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

interface FeaturedProduct {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
}

interface CarouselProps {
  products: FeaturedProduct[];
}

const Carousel: React.FC<CarouselProps> = ({ products }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product: FeaturedProduct) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const handleBuyNow = (product: FeaturedProduct) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    navigate('/cart');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container sticky-margin">
      <div className="heading-wrap mb-4">
        <div className="left-heading"></div>
        <h2 className="mb-3">Featured Products</h2>
      </div>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-3">
            <div className="card h-100 text-center shadow-sm">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="card-img-top carousel-img"
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <div className="d-flex justify-content-center gap-2">
                  <button
                    className="carousel-cart"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="carousel-buy"
                    onClick={() => handleBuyNow(product)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
