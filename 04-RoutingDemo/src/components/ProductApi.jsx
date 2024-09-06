import axios from "../utils/axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductApi = () => {
  const [products, setProducts] = useState([]);

  // Fetch data from the API using Axios or Fetch API
  // const api = "https://fakestoreapi.com/products";

  const getProdduct = () => {
    axios
      .get("/products")
      .then((products) => {
        // console.log(products.data)
        setProducts(products.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getProdduct();
  }, []);

  // const addProduct = () => {
  //   axios
  //     .post(api, {
  //       title: "test product",
  //       price: 13.5,
  //       description: "lorem ipsum set",
  //       image: "https://i.pravatar.cc",
  //       category: "electronic",
  //     })
  //     .then((products) => console.log(products.data))
  //     .catch((err) => console.error(err));
  // };

  return (
    <>
      {/* <button
        onClick={getProdduct}
        className="p-3 m-2 rounded bg-lime-500 text-white font-semibold"
      >
        Get Product's Data from api
      </button> */}

      <ul className="p-5 m-5 flex flex-wrap justify-center gap-8 bg-orange-500 rounded">
        {products.length > 0 ? (
          products.map((product) => (
            <li
              key={product.id}
              className="p-2 w-60 h-fit bg-zinc-100 rounded-lg"
            >
              <ProductCard product={product} />
            </li>
          ))
        ) : (
          <li className="p-2 bg-zinc-100 rounded">Products Loading...</li>
        )}
      </ul>

      {/* <button
        onClick={addProduct}
        className="p-3 m-2 rounded bg-lime-500 text-white font-semibold"
      >
        Add new Product's Data to api
      </button> */}
    </>
  );
};

export default ProductApi;
