import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './PackagePage.css';
import DestinationElement from './DestinationElement';
import FadeInBlack from './FadeInBlack';

const PackagePage = (props) => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const { id } = useParams();
  const packageItem = props.packages.find(item => item.id === id);
  if (!packageItem) {
    return <p>Package not found</p>;
  }
  let packagePicture = packageItem.src2;

  if (!packagePicture) {
    packagePicture = packageItem.src;
  }

  return (
    <div className="package-page">
      <div className="package-image">
        <img src={`${process.env.PUBLIC_URL}/${packagePicture}`} alt={packageItem.city} />
        <h1 className="package-title">{packageItem.city}</h1>
        <div className='fadeIn'>
        <FadeInBlack />
        </div>
      </div>
      <div className="package-details-container">
          <div className="package-details">
            <p className="package-short-description"><strong>{packageItem.text}</strong></p>
            <DestinationElement packageItem={packageItem} />
            <p className="package-price">Price: {packageItem.price}</p>
            <Link to='/'>
              <button className='order-button'>Order Now</button>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default PackagePage;
