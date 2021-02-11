import React, { useEffect, useState } from 'react';
import axios from 'axios';
const url = 'https://serverless-fun.netlify.app/api/2-basic-api';

const Basic = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      setProducts(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <section>hello from basic example</section>;
};

export default Basic;
