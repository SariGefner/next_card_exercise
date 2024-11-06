import React from 'react';
import User from '@/app/types/userType';

interface CardProps {
  user: User;
}

const Card: React.FC<CardProps> = ({ user }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        {/* Header/Name Section */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {user.name}
        </h2>
        
        {/* User Details Section */}
        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <span className="font-medium min-w-[80px]">Email:</span>
            <span className="text-gray-700">{user.email}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <span className="font-medium min-w-[80px]">Phone:</span>
            <span className="text-gray-700">{user.phone}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <span className="font-medium min-w-[80px]">Website:</span>
            <span className="text-gray-700">{user.website}</span>
          </div>
        </div>
        
        {/* Button Section */}
        <div className="mt-6">
          <button className="w-full px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500">
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;