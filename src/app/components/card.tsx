import React from 'react';
import User from '@/app/types/userType';

interface CardProps {
  user: User;
}



const Card: React.FC<CardProps> = ({ user }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', width: '200px' }}>
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <button style={{border: '1px solid #ccc', backgroundColor: 'light blue'}}>more details</button>
    </div>
  );
};

export default Card;