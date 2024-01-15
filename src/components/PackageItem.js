import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Button } from './Button';

function PackageItem(props) {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
        <motion.li layout className='packages-item' onClick={() => setIsOpen(!isOpen)}>
            <motion.Link className='packages-item-link' to={props.path} style={{borderRadius: '1rem'}}>
                <motion.figure layout className='packages-item-pic-wrap' data-category={props.label}>
                    <motion.img src={props.src} alt='Travel Image' className='packages-item-img'/>
                </motion.figure>
                {isOpen && ( 
                <motion.div>
                    <motion.h1>{props.city}</motion.h1>
                    <motion.div className='packages-item-info'>
                      <motion.h5 className='packages-item-text-inside'>
                        {props.text}
                      </motion.h5>
                    </motion.div>
                </motion.div>
                )}
                {!isOpen && ( 
                <motion.div layout className='packages-item-info'>
                    <motion.h5 layout className='packages-item-text'>
                        {props.text}
                    </motion.h5>
                </motion.div>
                )}
                {isOpen && ( 
                <motion.div className='price'>
                    <motion.p>
                      {props.price}
                    </motion.p>
                    <motion.div className='button-book'>
                      <button to='/login' className='button'>
                      Book
                      </button>
                    </motion.div>
                </motion.div>
                )}
            </motion.Link>
        </motion.li>
    </>
  )
}

export default PackageItem