import React from 'react';
import { Tile } from '../tile/Tile';

//shared by Contacts Page and Appointments Page
export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles.map((tile, index) => (
        <Tile key={index} tile={tile}/>
      ))}
    </div>
  );
};