// CategoryList.js
import React from 'react';
import { useSelector } from 'react-redux';

const CategoryList = () => {
  const categories = useSelector((state) => state.categories);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
