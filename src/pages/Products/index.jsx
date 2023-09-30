import React, { useEffect } from "react";
import PagesIntro from "../../components/PagesIntro";
import PaginatedItemsProducts from "../../components/PaginatedItems/PaginatedItemsProducts";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { getAllProducts } from "../../redux/slices/products.slice";

const Products = () => {
  const { products, loading } = useSelector((state) => state.products);
  const [cookies] = useCookies("token");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts({ token: cookies.token }));

    //eslint-disable-next-line
  }, []);

  return (
    <div className="pb-20">
      <PagesIntro />
      <div className="bg-white p-[25px] rounded-[20px] mt-[30px]">
        {loading ? (
          "Loading..."
        ) : products.length <= 0 ? (
          <h1>Hech narsa topilmadi</h1>
        ) : (
          <PaginatedItemsProducts data={products} itemsPerPage={12} />
        )}
      </div>
    </div>
  );
};

export default Products;
