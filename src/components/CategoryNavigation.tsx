import React from 'react';

interface CategoryNavigationProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const CategoryNavigation: React.FC<CategoryNavigationProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <div className="d-flex flex-wrap gap-2 justify-content-center my-4 category-wrap">
      <button
        className={`btn ${
          selectedCategory === 'all' ? 'btn-primary' : 'btn-outline-primary'
        }`}
        onClick={() => onCategorySelect('all')}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`btn ${
            selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'
          }`}
          onClick={() => onCategorySelect(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoryNavigation;
