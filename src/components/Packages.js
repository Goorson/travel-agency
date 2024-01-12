import React, { useState } from 'react'
import PackageItem from './PackageItem'
import './Packages.css'

function Packages() {
  return (
    <div layout className='packages' id='packages'>
        <h1>Our packages</h1>
        <div layout className='packages-container'>
            <div layout className='packages-wrapper'>
                <ul className='packages-items'>
                    <PackageItem 
                    src='destination1.jpg'
                    text="Explore the beautiful beaches and vibrant culture of this glamorous City."
                    label='Luxury'
                    path='/services'
                    city='DUBAI'
                    price='1000$'
                    />
                    <PackageItem 
                    src='destination2.jpg'
                    text='Discover the historic landmarks and delicious cuisine of historic masterpiece.'
                    label='Sightseeing'
                    path='/services'
                    city='ISTAMBUL'
                    price='500$'
                    />
                  </ul>
                  <ul className='packages-items'>
                    <PackageItem 
                    src='destination3.jpg'
                    text='Experience the natural beauty and adventure activities on multiple Islands.'
                    label='Relax'
                    path='/services'
                    city='MALEDIVES'
                    price='200$'
                    />
                    <PackageItem 
                    src='destination4.jpg'
                    text='Discover the timeless beauty historic architecture and scenic riverfront.'
                    label='Nature'
                    path='/services'
                    city='PORTO'
                    price='1200$'
                    />
                    <PackageItem 
                    src='destination5.jpg'
                    text='Cobblestone streets, iconic castle, and festivals. Enchanting Scottish adventure.'
                    label='City break'
                    path='/services'
                    city='EDINBURGH'
                    price='1000$'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Packages