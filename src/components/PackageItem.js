import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";



{/* <AnimatePresence>
  {selectedId && (
    <motion.div layoutId={selectedId}>
      <motion.h5>{item.subtitle}</motion.h5>
      <motion.h2>{item.title}</motion.h2>
      <motion.button onClick={() => setSelectedId(null)} />
    </motion.div>
  )}
</AnimatePresence> */}

function PackageItem(props) {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
        <motion.li layout className='packages-item' onClick={() => setIsOpen(!isOpen)}>
            <motion.Link initial={{size:1}} animate={{size:1.3}} className='packages-item-link' to={props.path} style={{borderRadius: '1rem'}}>
                <motion.figure layout className='packages-item-pic-wrap' data-category={props.label}>
                    <motion.img src={props.src} alt='Travel Image' className='packages-item-img'/>
                </motion.figure>
                {isOpen && ( 
                <motion.div>
                    <motion.h1>City</motion.h1>
                </motion.div>
                )}
                <motion.div className='packages-item-info'>
                    <motion.h5 className='packages-item-text'>
                        {props.text}
                    </motion.h5>
                </motion.div>
                {isOpen && ( 
                <motion.div>
                    <motion.p>
                        Price
                    </motion.p>
                </motion.div>
                )}
            </motion.Link>
        </motion.li>
    </>
  )
}

export default PackageItem