import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
}

interface FlashDealsProps {
  products: Product[];
}

const FlashDeals: React.FC<FlashDealsProps> = ({ products }) => {
  const [timeLeft, setTimeLeft] = useState<number>(3600); // ⏳ 1 hour countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m
      .toString()
      .padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section className="my-5">
      <div className="heading-wrap mt-lg-5 mb-4">
        <div className="left-heading"></div>
        <h2 className="mb-3">Flash Deals</h2>
      </div>
      <p className="text-danger fw-bold">⏳ Ends in: {formatTime(timeLeft)}</p>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlashDeals;
