import { useCallback, useEffect } from "react";
import { useState } from "react";

const DebounceSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const searchProducts = useCallback(async () => {
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${debouncedTerm}`
    );

    const { products } = await res.json();
    setResults(products);
  }, [debouncedTerm]);

  useEffect(() => {
    if (debouncedTerm.trim().length > 0) searchProducts();
  }, [searchProducts, debouncedTerm]);

  return (
    <div className="h-screen flex flex-col gap-2 items-center justify-center">
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 mt-2 rounded-md border border-gray-300 focus:outline focus:outline-amber-500"
      />
      <div className="space-y-1 overflow-y-auto">
        {results.length > 0 ? (
          results?.map((result) => (
            <div className="p-2 border border-gray-300 rounded-md">
              {result.title}
            </div>
          ))
        ) : (
          <div className="p-2 border border-gray-300 rounded-md">
            No results found
          </div>
        )}
      </div>
    </div>
  );
};

export default DebounceSearch;
