import React from 'react';
import { useStore } from '../store';
import { Link } from 'react-router-dom';

const CardItem = ({ item, type }) => {
  const { state, dispatch } = useStore();

  const isFavorite = state.favorites.some(fav => fav.uid === item.uid);
  const isReadLater = state.readLater.some(rl => rl.uid === item.uid);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: item });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: item });
    }
  };

  const handleReadLater = () => {
    if (isReadLater) {
      dispatch({ type: 'REMOVE_READ_LATER', payload: item });
    } else {
      dispatch({ type: 'ADD_READ_LATER', payload: item });
    }
  };

  return (
    <div className="card mb-4" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">
          Gender: {item.gender || 'n/a'}<br />
          Hair Color: {item.hair_color || 'n/a'}<br />
          Eye Color: {item.eye_color || 'n/a'}
        </p>
        <Link to={`/${type}/${item.uid}`} className="btn btn-info">Learn more!</Link>
        <button onClick={handleFavorite} className="btn btn-primary ml-2">
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
        <button onClick={handleReadLater} className="btn btn-secondary ml-2">
          {isReadLater ? 'Remove from Read Later' : 'Read Later'}
        </button>
      </div>
    </div>
  );
};

export default CardItem;
