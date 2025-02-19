import React, { useState } from 'react';

interface PriceFilterProps {
  onPriceChange: (min: number, max: number) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ onPriceChange }) => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  const handleApplyFilter = () => {
    onPriceChange(minPrice, maxPrice);
  };

  return (
    <div className="card p-3">
      <h5>💰 Filter by Price</h5>
      <div className="d-flex flex-column gap-2">
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="form-control"
          placeholder="Min Price"
        />
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="form-control"
          placeholder="Max Price"
        />
        <button className="btn btn-primary" onClick={handleApplyFilter}>
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;
