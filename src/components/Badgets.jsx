import React from 'react';

const Technologies = (prop) => {
  const { item } = prop;
  return (
    <li className="item">{item.technologie}</li>
  );
};

export default Technologies;
