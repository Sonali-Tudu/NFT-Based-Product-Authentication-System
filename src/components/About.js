import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <React.Fragment>
            <div className='section' id='about'>
                <div className="section-type landing-page">
                    <div className="landing-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                        <div className="headings">
                            <span className='ml-10 mb-3 text-[30px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>Who are you?</span>
                            <span className="main-heading gradient-text"></span>
                        </div>

                        <br />
                        <br />
                        <br />

                        <div>

                            <Link to="/manfacture" className=' mb-6 mr-16 inline-block p-2 bg-blue-500 text-white rounded  text-center'>Manufacturer</Link>
                            <Link to="/retailer" className=' mb-6 mr-16 inline-block p-2 bg-blue-500 text-white rounded  text-center'>Retailer</Link>
                            <Link to="/retailer" className=' mb-6 mr-16 inline-block p-2 bg-blue-500 text-white rounded  text-center'  >Wholesaler</Link>
                            <Link to="/retailer" className=' mb-6 mr-16 inline-block p-2 bg-blue-500 text-white rounded  text-center'>Distributor</Link>
                            <Link to="/retailer" className=' mb-6 mr-16 inline-block p-2 bg-blue-500 text-white rounded  text-center' >Shopkeeper</Link>
                            <Link to="/customer" className=' mb-6 mr-16 inline-block p-2 bg-blue-500 text-white rounded  text-center' >Customer</Link>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;
