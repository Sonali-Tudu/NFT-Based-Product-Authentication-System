
import React from 'react';
import { Outlet } from "react-router-dom";

const inputField = [
    'DID-M',
    'Company Name',
    'DID-R',
    'DID-W',
    'DID-D',
    'DID-S',
    'Company Details',
    'Country'
];

const Manufacture = () => {
    return (
        <div className="flex m-auto items-center justify-center min-h-screen bg-gray-100">
            <div className="client-create bg-white p-14 rounded-lg shadow-lg ">
                <h1 className="title-heading text-center mb-6 text-2xl">Registration Form</h1>
                <div className="create-form">
                    <div className="input-fields space-y-4">
                        {inputField.map((item, index) => (
                            <div key={index} className="w-full">
                                <input
                                    type="text"
                                    placeholder={item}
                                    className="w-full h-10  p-2  border rounded"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-6">
                        <a href="/containers/AlreadyRegistered" className="inline-block p-2 bg-blue-500 text-white rounded">
                            Continue
                        </a>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manufacture;

