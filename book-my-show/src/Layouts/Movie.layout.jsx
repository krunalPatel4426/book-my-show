import React from 'react';
import Footer from '../components/Footer.component/Footer.component';
import Navbar from '../components/Navbar/Navbar.Component';

const MovieLayoutHOC = (Components) => ({...props}) => {
  return (
    <div>
        <Navbar />
        <Components {...props} />
        <Footer />
    </div>
  )
}

export default MovieLayoutHOC;