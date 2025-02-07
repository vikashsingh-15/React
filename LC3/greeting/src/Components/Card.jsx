import React from 'react';

// function Card(props) {
//   return (
//     <div className="card" style={{ width: '18rem', margin: '10px' }}>   
//       <img src={props.imageUrl} alt="placeholder" />
//       <div className="card-body">
//         <h5 className="card-title">{props.name}</h5>
//         <p className="card-text"></p>
//         <a href="#" className="btn btn-primary">Go somewhere</a>
//       </div>
//     </div>
//     );
// }
// export default Card;

const Card = (props) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>   
      <img src={props.imageUrl} alt="placeholder" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text"></p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    );
}
export default Card;




// const Card = ({name,imageUrl}) => {
  //   return (
  //     <div className="card" style={{ width: '18rem', margin: '10px' }}>   
  //       <img src={imageUrl} alt="placeholder" />
  //       <div className="card-body">
  //         <h5 className="card-title">{name}</h5>
  //         <p className="card-text"></p>
  //         <a href="#" className="btn btn-primary">Go somewhere</a>
  //       </div>
  //     </div>
  //     );
  // }
  // export default Card;

  
  
  