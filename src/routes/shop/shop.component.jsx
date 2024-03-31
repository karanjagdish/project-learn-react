import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";

import "./shop.styles.scss";
import Category from "../category/category.component";

const Shop = () => {
  // Cannot use nested routes unless the parent is a route
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      {/* always access to the url as param for 
       /shop/<category-name> */}
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
