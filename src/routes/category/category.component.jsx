import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, CategoryTitle } from "./category.styles";
import { useSelector } from "react-redux";
import {
    selectCategoriesIsLoading,
    selectCategoriesMap,
} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);
    const isLoading = useSelector(selectCategoriesIsLoading);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {isLoading ? (
                <Spinner />
            ) : (
                <CategoryContainer>
                    {products && //safe gaurd if products is empty for example waiting for fetch
                        // on async getCategories in context to complete
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </CategoryContainer>
            )}
        </Fragment>
    );
};

export default Category;
