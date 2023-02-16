import React from "react";

function requestApi() {
  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);
  const [isError, setError] = React.useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("src/data/products.json");
    const json = await response.json();

    if (!response.ok) {
      setError(true);
    }

    setData(json);
    setLoading(false);

    setTimeout(() => {
      setError(false);
    }, 1500);
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  return { data, isLoading, isError };
}

export default requestApi;
