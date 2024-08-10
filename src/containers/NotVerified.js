import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from "../variants";
import { Link, Outlet } from 'react-router-dom';

const Verified = () => {
    return (
        <div className='section' id='about'>
            <div className="section-type landing-page">
                <div className="landing-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                    <div className="headings">
                        <span className='ml-10 mb-3 text-[30px] lg:text-[60px] font-secondary font-semibold leading-[1]lg:text-[50px] text-blue-500'>Fake Product❌ </span>
                        <span className="main-heading gradient-text"></span>
                    </div>
                    <motion.div
                        variants={fadeIn('up', 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                        className='ml-10 mb-3 text-[20px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]lg:text-[35px] text-black'
                    >
                        Your Product is not Authentic , please try again
                    </motion.div>
                    <br></br>
                    <div>
                        <a href="/about" className="inline-block p-2 bg-blue-500 text-white rounded p-auto w-32 text-center mb-4">
                            Go to Home
                        </a>
                    </div>

                    <Outlet />

                </div>
            </div>
        </div>
    );
};

export default Verified;
