import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import "./shop.styles.scss";
import { Fragment } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  // console.log("Products in shop:", products);

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        // <Fragment>
        //   <h2>{title}</h2>
        //   <div className="products-container">
        //     {categoriesMap[title].map((product) => (
        //       <ProductCard key={product.id} product={product}></ProductCard>
        //     ))}
        //   </div>
        // </Fragment>
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
