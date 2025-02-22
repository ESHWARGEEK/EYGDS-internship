import React from 'react';
import TopBar from '../components/TopBar';
import ItemsDisplay from '../components/ItemsDisplay';
import Chains from '../components/Chains';
import FirmCollections from '../components/FirmCollections';
import ProductMenu from '../components/ProductMenu';
import Register from '../components/Register'; // Import the Register component
import Login from '../components/Login';

const LandingPage = () => {
  return (
    <div>
        <TopBar />
        <div className="landingSection">
        <ItemsDisplay />
        <Chains />
        <FirmCollections />
        <ProductMenu />
    </div>
    </div>
  )
}

export default LandingPage
