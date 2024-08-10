

import React from 'react';

const inputField = [
    'Product ID',
    'Product Name',
    'Description'
];

const NotRegistered = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="client-create bg-white p-20 rounded-lg shadow-lg">
                <h1 className="title-heading text-center mb-6 text-2xl">Product Details</h1>
                <div className="create-form">
                    <div className="input-fields space-y-4">
                        {inputField.map((item, index) => (
                            <div key={index} className="w-full">
                                <input
                                    type="text"
                                    placeholder={item}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="image-upload mt-6 text-center">
                        <div className="border border-dashed border-gray-500 relative">
                            <input type="file" multiple className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50" />
                            <div className="text-center p-10 absolute top-0 right-0 left-0 m-auto">
                                <h4>
                                    Drop files anywhere to upload
                                    <br />or
                                </h4>
                                <p className="">Select Files</p>
                            </div>
                        </div>
                        <input type="file" className="hidden" />
                    </div>
                    <div className="text-center mt-6">
                        <button className="p-2 bg-blue-500 text-white rounded mr-4">Generate QR</button>
                        <button className="p-2 bg-blue-500 text-white rounded">Download QR</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NotRegistered;
