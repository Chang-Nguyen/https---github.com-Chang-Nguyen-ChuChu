import React from 'react';

const Dish = ({ dish }) => {
 return (
    <div className="dish">
      {dish.name}
    </div>
 );
};

export default Dish;