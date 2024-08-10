import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Customer = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl mb-4">Verify page</h1>
                <div className="create-form">
                    <div className="input-fields space-y-4">
                        <div className="flex flex-col md:flex-row items-center justify-center">
                            <div className="p-4">
                                <div className="text-center mt-6">
                                    <a href="/" className="inline-block p-2 bg-blue-500 text-white rounded">
                                        Continue
                                    </a>
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Customer