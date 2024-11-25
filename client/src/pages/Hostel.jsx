import React from 'react';
import '../pages/HostelStyles/hostelmain.css';
import HostelsComponent from '../components/HostelsComponent';

const Hostel = () => {
    document.title = 'Explore our Hostels in Indore';
    return (
        <div className="hostelMainpage page min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
            {/* Breadcrumb */}
            <p className="text-gray-600 text-sm flex items-center mb-4">
                <a href="/" className="text-blue-500 hover:underline">
                    Beiyo
                </a>
                <span className="mx-2">/</span>
                <span className="font-semibold text-gray-700">Hostels</span>
            </p>
            <h1 className="mainHead text-center text-4xl font-bold text-gray-800 mb-6">
                Explore Our PG/Hostels in Indore
            </h1>
            
            <div className="bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-lg shadow-lg border border-gray-300 mx-4">
                <HostelsComponent searchBoolean={true} />
            </div>
        </div>
    );
};

export default Hostel;
