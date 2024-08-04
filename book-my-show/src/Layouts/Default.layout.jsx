import React from 'react';
import Navbar from '../components/Navbar/Navbar.Component';

const DefaultLayoutHOC = (Components) =>
    ({...props}) => {
  return (
    <div>
        <Navbar />
        <Components {...props}/>
        <div>Footer</div>
    </div>
  )
}

export default DefaultLayoutHOC;