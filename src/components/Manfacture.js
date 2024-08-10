import React from 'react';
import { Outlet } from "react-router-dom";

const Manufacture = () => {
    return (
        <React.Fragment>
            <div className="flex items-center justify-center min-h-screen">
                <div className="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md">
                    <h1 className="title-heading mb-4 lg:text-[40px]">Already Registered?</h1>

                    <a href="/containers/AlreadyRegistered" className="inline-block p-2 bg-blue-500 text-white rounded  text-center">
                        Click here
                    </a>
                    <h1 className="title-heading mb-4 lg:text-[40px]">Not Registered?</h1>

                    <a href="/containers/NotRegistered" className="inline-block p-2 bg-blue-500 text-white rounded  text-center">
                        Click here
                    </a>
                    <Outlet />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Manufacture;


