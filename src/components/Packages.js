import React from 'react'
import PackageItem from './PackageItem';
import './Packages.css'

function Packages(props) {

  const packages = props.packages;
  const packages1 = packages.slice(0, 2);
  const packages2 = packages.slice(2, 5);
  return (
    <div layout className='packages' id='packages'>
        <h1>Our packages</h1>
        <div layout className='packages-container'>
            <div layout className='packages-wrapper'>
            <ul className='packages-items'>
              {packages1.map((packages1) => (
                <PackageItem 
                id={packages1.id}
                src={packages1.src}
                text={packages1.text}
                label={packages1.label}
                path={packages1.path}
                city={packages1.city}
                price={packages1.price}
                  />
              ))}
            </ul>
            <ul className='packages-items'>
              {packages2.map((packages2) => (
                <PackageItem 
                id={packages2.id}
                src={packages2.src}
                text={packages2.text}
                label={packages2.label}
                path={packages2.path}
                city={packages2.city}
                price={packages2.price}
                  />
              ))}
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Packages