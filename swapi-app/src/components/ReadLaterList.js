import React from 'react';
import { useStore } from '../store';
import CardItem from './CardItem';

const ReadLaterList = () => {
  const { state } = useStore();

  return (
    <div className="row">
      {state.readLater.map(item => (
        <div key={item.uid} className="col-md-4">
          <CardItem item={item} type="people" />
        </div>
      ))}
    </div>
  );
};

export default ReadLaterList;
