import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { getProducts } from '../features/products/productSlice';
import ProductCard from '../components/ProductCard';
import Carousel from '../components/Carousel';
import CategoryNavigation from '../components/CategoryNavigation';
import FlashDeals from '../components/FlashDeals';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector((state: RootState) => state.products);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortOption, setSortOption] = useState('newest');

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (status === 'loading')
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <div className="loading-container">
          <div className="dot dot1"></div>
          <div className="dot dot2"></div>
          <div className="dot dot3"></div>
        </div>
      </div>
    );
  
  if (status === 'failed') return <p>Failed to load products.</p>;

  // Dynamic available categories and brands
  const availableCategories = Array.from(new Set(items.map((p) => p.category)));
  const availableBrands = Array.from(new Set(items.map((p) => p.brand)));

  // Apply filters
  let filteredProducts = items.filter(
    (product) =>
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      (selectedBrand === 'all' || product.brand === selectedBrand) &&
      product.price >= minPrice &&
      product.price <= maxPrice &&
      product.rating >= selectedRating
  );

  // Sorting
  filteredProducts = filteredProducts.sort((a, b) => {
    switch (sortOption) {
      case 'priceLowHigh':
        return a.price - b.price;
      case 'priceHighLow':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
      default:
        return b.id - a.id;
    }
  });

  const flashDeals = items.filter((p) => p.discountPercentage > 10).slice(0, 4);

  return (
    <div className="container mt-4">
      <Carousel products={items.slice(0, 6)} />
      <FlashDeals products={flashDeals} />

      <CategoryNavigation
        categories={availableCategories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      {/* Filters Section */}
      <section className="my-4 border rounded p-3 bg-dark filter-wrap">
        <h4>Filters</h4>
        <div className="row">
          <div className="col-md-3">
            <label>Price Range: ${minPrice} - ${maxPrice}</label>
            <input
              type="range"
              className="form-range"
              min="0"
              max="1000"
              step="50"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>
          <div className="col-md-3">
            <label>Brand:</label>
            <select
              className="form-select"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value="all">All Brands</option>
              {availableBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-3">
            <label>Rating:</label>
            <select
              className="form-select"
              value={selectedRating}
              onChange={(e) => setSelectedRating(Number(e.target.value))}
            >
              <option value={0}>All Ratings</option>
              <option value={3}>3⭐ & above</option>
              <option value={4}>4⭐ & above</option>
              <option value={5}>5⭐ only</option>
            </select>
          </div>
          <div className="col-md-3">
            <label>Sort By:</label>
            <select
              className="form-select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="newest">Newest</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </section>

      {/* Product Listing */}
      <div className="heading-wrap mt-lg-5 mb-4">
        <div className="left-heading"></div>
        <h2 className="mb-3">All Products</h2>
      </div>
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <p className="text-center">🚫 No products match the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
