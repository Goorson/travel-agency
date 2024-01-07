import React from 'react'
import { Link } from 'react-router-dom'

function PackageItem(props) {
  return (
    <>
        <li className='packages-item'>
            <Link className='packages-item-link' to={props.path}>
                <figure className='packages-item-pic-wrap' data-category={props.label}>
                    <img src={props.src} alt='Travel Image' className='packages-item-img'/>
                </figure>
                <div className='packages-item-info'>
                    <h5 className='packages-item-text'>{props.text}</h5>
                </div>
            </Link>
        </li>
    </>
  )
}

export default PackageItem