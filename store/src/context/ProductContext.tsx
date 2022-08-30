import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
const APIContext = createContext();

export function APIContextProvider({ children }) {
  console.log(children)
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const url = location.href.split('/');
      const productID = url[url.length -1];
      const { data } = await axios.get(
        `http://localhost:3031/api/products/${productID}`
      );
      setProduct(data);
    }
    fetchData();
  }, []);
  return (
    <APIContext.Provider
      value={{
        product
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
