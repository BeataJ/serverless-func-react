import React, { useEffect, useState } from 'react';
import axios from 'axios';

const url = '/api/products';

const Airtable = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
    } catch (error) {}
  };

  return <div>hello from airtable</div>;
};

export default Airtable;
