import React from 'react';

import { FaPhoneAlt } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from "../variants";


const Banner = () => {
    return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
        <div className=' container mx-auto '>
            <div className='mx-auto mb-4 max-w-lg  flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-20'>
                <div className='flex-1 text-center font-secondary lg:text-left lg:gap-x-12  p-7'>
                    <motion.h1
                        variants={fadeIn('up', 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-[20px] font-bold leading-[0.8] lg:text-[90px] "
                    > Fake Product Identification <span> using NFT</span></motion.h1>
                    <br />
                    <motion.div variants={fadeIn('up', 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                        className='mb-6 text-[30px] lg:text-     [60px]   font-secondary font-semibold uppercase leading-[1]'><span className=' text-blue-500 mr-2'> An Automation Framework for</span>
                        <TypeAnimation sequence={['Product Authentication', 2000,
                            'Fraud Prevention', 2000]}
                            speed={150}
                            className='text-accent'
                            wrapper='span'
                            repeat={Infinity} />

                    </motion.div>
                    <input className='bg-transparent border-b py-3 outline-none w-full placeholder: text-black focus:border-accent trasition-all'
                        type='text' placeholder='Enter Your Private Key' />
                    <br />
                    <br />
                    <a href="/about" className="inline-block p-2 bg-blue-500 text-white rounded p-auto  w-20 text-center">
                        Submit
                    </a>
                    {/* Socials*/}
                    <motion.div variants={fadeIn('up', 0.7)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }} className='flex text-[25px] gap-x-6 max-w-max mx-auto lg:mx-25  items-center p-10'>

                        <a href='#'>
                            <FaPhoneAlt />
                        </a>
                        <a href='https://www.knuct.com/'>
                            <TbWorldWww />
                        </a>


                    </motion.div>

                </div>

                <motion.div variants={fadeIn('down', 0.5)}
                    initial="hidden"
                    whileInView="show"

                    className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] ' >
                    {/*image*/}

                </motion.div>
            </div>
        </div>
    </section >;
};

export default Banner;
