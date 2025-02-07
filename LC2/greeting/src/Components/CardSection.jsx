import React from 'react';
import Card from './Card';

function CardSection() {
  return (
    <div className="card-section" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',padding: '20px' }}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  );
}

export default CardSection;
