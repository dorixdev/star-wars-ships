import React from 'react';
import { useParams } from 'react-router-dom';

export const ShipPage = () => {
  const { episodeid, shipid } = useParams<Params>();
  return (
    <div>
      <h1>Ship Page</h1>
      <h2>Episode {episodeid}</h2>
      <h2>Ship {shipid}</h2>
    </div>
  );
};
