// import React from 'react'
// import "./Testimonials.css"
// import { motion } from 'framer-motion';

// const Testimonials = () => {
//     return (
//         <div className='main'>
//             <p className='para'>Testimonials</p>
//             <hr />
//             <div className='below-card'>
//                 <span className='span'><img src='/images/Vector.png' alt='' /></span>
//                 <div className='below-cards'>
//                     <motion.img
//                         src='/images/Frame1.png'
//                         alt=''
//                         drag
//                         dragElastic={0.9}
//                         dragMomentum={false} 
//                         dragConstraints={{
//                             top: -window.innerHeight + 100,
//                             left: -window.innerWidth + 100,
//                             right: window.innerWidth - 100,
//                             bottom: window.innerHeight - 100,
//                         }}
//                     />
//                     <motion.img
//                         src='/images/Frame2.png'
//                         alt=''
//                         drag
//                         dragElastic={0.9} 
//                         dragMomentum={false} 
//                         dragConstraints={{
//                             top: -window.innerHeight + 100,
//                             left: -window.innerWidth + 100,
//                             right: window.innerWidth - 100,
//                             bottom: window.innerHeight - 100,
//                         }}
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Testimonials




import React from 'react';
import "./Testimonials.css";
import { motion } from 'framer-motion';

const Testimonials = () => {
    const topConstraint = -600; // Adjust this value to allow more dragging above the top of the screen

    return (
        <div className='main'>
            <p className='para'>Testimonials</p>
            <hr />
            <div className='below-card'>
                <span className='span'><img src='/images/Vector.png' alt='' /></span>
                <div className='below-cards'>
                    <motion.img
                        src='/images/Frame1.png'
                        alt=''
                        drag
                        dragElastic={0.9}
                        dragMomentum={false}
                        dragConstraints={{
                            top: topConstraint,
                            left: -window.innerWidth + 100,
                            right: window.innerWidth - 100,
                            bottom: Math.min(window.innerHeight - 100, 0),
                        }}
                    />
                    <motion.img
                        src='/images/Frame2.png'
                        alt=''
                        drag
                        dragElastic={0.9}
                        dragMomentum={false}
                        dragConstraints={{
                            top: topConstraint,
                            left: -window.innerWidth + 100,
                            right: window.innerWidth - 100,
                            bottom: Math.min(window.innerHeight - 100, 0),
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
