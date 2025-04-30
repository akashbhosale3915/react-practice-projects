import { useEffect } from "react";
import { useState } from "react";

const Pagination = () => {
  const PRODUCTS_PER_PAGE = 10;
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const TOTAL_PAGES = products?.length / PRODUCTS_PER_PAGE;
  const [paginatedProducts, setPaginatedProducts] =
    useState([]);

  const fetchProducts = async () => {
    const res = await fetch(
      "https://dummyjson.com/products?limit=100"
    );
    const productsResponse = await res.json();
    setProducts(productsResponse?.products);
  };

  useEffect(() => {
    const start = currentPage * PRODUCTS_PER_PAGE;
    const end = start + PRODUCTS_PER_PAGE;
    setPaginatedProducts(products.slice(start, end));
  }, [products, currentPage, PRODUCTS_PER_PAGE]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="h-screen overflow-hidden flex flex-col items-center">
      <div className="flex flex-wrap justify-between gap-5 flex-1 overflow-y-auto">
        {paginatedProducts.map((product) => (
          <div
            key={product.id}
            className="h-80 w-72 flex flex-col border border-gray-300 p-2 rounded-md"
          >
            <div className="h-60 w-full flex-1">
              <img
                src={product.thumbnail}
                alt="product"
                className="object-cover"
              />
            </div>
            <div>{product.title}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center py-1 border border-gray-200 w-full">
        <div className="flex gap-2">
          {Array.from({ length: TOTAL_PAGES }).map(
            (_, index) => (
              <button
                key={index}
                className={`border border-gray-300 px-4 p-2 shadow-2xl rounded-md cursor-pointer ${
                  currentPage === index &&
                  "text-red-500 font-bold"
                }`}
                onClick={() => setCurrentPage(index)}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
