import React from 'react';

const PremiumContent = ({changeFilter}) => {
  return (
    <div className="premium-content">
      <div className="local-pros-area">
        <h4>lessons</h4>
        <p>connect with local pros in your area</p>
        <button>find a pro</button>
      </div>
      <div className="online-videos">
        <h4>premium content</h4>
        <p>access online tutorials</p>
        <button>subscribe</button>
      </div>
      <button className="back-to-home" onClick={() => changeFilter('home')}>back</button>
    </div>
  );
}

export default PremiumContent;
