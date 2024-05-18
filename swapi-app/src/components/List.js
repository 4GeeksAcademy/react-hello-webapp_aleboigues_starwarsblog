import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardItem from './CardItem';

const List = ({ type }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://www.swapi.tech/api/${type}`);
      setItems(response.data.results);
    };

    fetchData();
  }, [type]);

  return (
    <div className="row">
      {items.map(item => (
        <div key={item.uid} className="col-md-4">
          <CardItem item={item} type={type} />
        </div>
      ))}
    </div>
  );
};

export default List;
