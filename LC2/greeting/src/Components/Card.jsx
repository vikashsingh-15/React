import React from 'react';

function Card() {
  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>   
      <img src="https://via.placeholder.com/150" alt="placeholder" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Card text.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    );
}

export default Card;
