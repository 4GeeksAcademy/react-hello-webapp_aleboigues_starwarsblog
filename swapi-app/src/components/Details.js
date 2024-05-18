import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = ({ type }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://www.swapi.tech/api/${type}/${id}`);
      setItem(response.data.result.properties);
    };

    fetchData();
  }, [id, type]);

  if (!item) return <div>Loading...</div>;

  const imageUrl = `https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`;

  return (
    <div className="container mt-4">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={imageUrl} className="img-fluid rounded-start" alt={item.name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">
                {Object.keys(item).map(key => (
                  <div key={key}>
                    <strong>{key.replace('_', ' ')}:</strong> {item[key]}
                  </div>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
