import React from 'react';
import { useParams } from 'react-router-dom';
import './PackagePage.css'

const PackagePage = (props) => {
  const { id } = useParams();
  const packageItem = props.packages.find(item => item.id === id);

  if (!packageItem) {
    return <p>Package not found</p>;
  }

  return (
    <div className="package-page">
      <div className="package-image">
        <img src={`${process.env.PUBLIC_URL}/${packageItem.src}`} alt={packageItem.city} />
        <h1 className="package-title">{packageItem.city}</h1>
      </div>
      <div className="package-details">
        <p className="package-description">{packageItem.text}</p>
        <p classname="package-description">{packageItem.description}</p>
        <p className="package-price">Price: {packageItem.price}</p>
      </div>
    </div>
  );
};

export default PackagePage;
