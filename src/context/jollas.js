import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listMercancias } from "../graphql/queries";
import { processOrder } from "../graphql/mutations";

const MercanciaContext = React.createContext();

const MercanciaProvider = ({ children }) => {
  const [mercancias, setMercancias] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMercancias();
  }, []);

  const checkout = async (orderDetails) => {
    const payload = {
      id: uuidv4(),
      ...orderDetails
    };
    try {
      await API.graphql(graphqlOperation(processOrder, { input: payload }));
      console.log("Order is successful");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMercancias = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listMercancias,
        authMode: "API_KEY"
      });
      const mercanciaData = data.listMercancias.items;
      const featured = mercanciaData.filter((mercancia) => {
        return !!mercancia.featured;
      });
      setMercancias(mercancias);
      setFeatured(featured);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MercanciaContext.Provider value={{ mercancias, featured, loading, checkout }}>
      {children}
    </MercanciaContext.Provider>
  );
};

export { MercanciaContext, MercanciaProvider };
