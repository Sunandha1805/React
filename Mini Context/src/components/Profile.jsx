import React from 'react'
import UserContext from '../context/userContext';
import { useContext } from 'react';

function Profile() {
  const { user } = useContext(UserContext);
    if (!user) {
        return <div className='text-red-500'>Please log in to see your profile.</div>;
    }
  return (
    <div className='text-green-700 font-bold'>
      Welcome {user.username}
    </div>
  )
}

export default Profile
