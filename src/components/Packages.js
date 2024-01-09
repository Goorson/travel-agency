import React, { useState } from 'react'
import PackageItem from './PackageItem'
import './Packages.css'

function Packages() {
  return (
    <div className='packages'>
        <h1>Our packages</h1>
        <div className='packages-container'>
            <div className='packages-wrapper'>
                <ul className='packages-items'>
                    <PackageItem 
                    src='destination1.jpg'
                    text="Explore the beautiful beaches and vibrant culture of Dubai glamorous City."
                    label='Luxury'
                    path='/services'
                    />
                    <PackageItem 
                    src='destination2.jpg'
                    text='Discover the historic landmarks and delicious cuisine of mighty Istambul.'
                    label='Sightseeing'
                    path='/services'
                    />
                  </ul>
                  <ul className='packages-items'>
                    <PackageItem 
                    src='destination3.jpg'
                    text='Experience the natural beauty and adventure activities on Maledives Islands.'
                    label='Relax'
                    path='/services'
                    />
                    <PackageItem 
                    src='destination4.jpg'
                    text='Discover the timeless beauty historic architecture and scenic riverfront.'
                    label='Nature'
                    path='/services'
                    />
                    <PackageItem 
                    src='destination5.jpg'
                    text='Traditional temples, bustling street life, explore blend of innovation and tradition.'
                    label='City break'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Packages