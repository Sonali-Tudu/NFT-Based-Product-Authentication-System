import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { Outlet } from "react-router-dom";

const inputField = [
    'Private Key ',
    'Company Name',
    'Details',

];

const QrCodeReader = () => {
    useEffect(() => {
        const onScanSuccess = (qrCodeMessage) => {
            document.getElementById("result").innerHTML =
                `<span class="result">${qrCodeMessage}</span>`;
        };

        const onScanError = (errorMessage) => {
            // Handle Scan Error
            console.error(errorMessage);
        };

        const html5QrCodeScanner = new Html5QrcodeScanner(
            "reader",
            { fps: 10, qrbox: 250 }
        );
        html5QrCodeScanner.render(onScanSuccess, onScanError);

        // Cleanup function
        return () => {
            html5QrCodeScanner.clear();
        };
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl mb-4">QR Code Reader </h1>
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
                        <div className="flex flex-col md:flex-row items-center justify-center">
                            <div className="mb-4 md:mb-0 md:mr-4">
                                <div id="reader" className="w-64 h-64"></div>
                            </div>
                            <div className="p-4">
                                <h4 className="text-lg mb-2">Scan Result</h4>
                                <div id="result" className="border p-2 rounded">
                                    Result goes here
                                </div>
                                <div className="text-center mt-6">
                                    <a href="/containers/NotVerified" className="inline-block p-2 bg-blue-500 text-white rounded">
                                        Continue
                                        {/*/containers/Verified   if NES nd ES merging is verified*/}
                                    </a>

                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QrCodeReader;
