import React from 'react';
import '../../public/app_nav.css';

const appNav = (props) => {
  console.log('appNav');
  return (
    <div id='window-nav'>
      <img id='logo' src='./hexagonFAT.png' alt='devtool logo' />
      <button
        className='window-btn active'
        id='graphqlbtn'
        data-btn='Graphql'
        onClick={e => {
          props.handleWindowChange(e.target);
        }}
      >
        GraphQL
      </button>
      <button
        className='window-btn'
        id='reactbtn'
        data-btn='React'
        onClick={e => {
          props.handleWindowChange(e.target);
        }}
      >
        React
      </button>
    </div>
  );
};

export default React.memo(appNav);