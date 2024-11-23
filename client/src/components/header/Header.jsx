import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { TiMessages } from 'react-icons/ti';

const Header = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="bg-slate-500 px-4 py-2 flex justify-between items-center">
      <div>
        <TiMessages className="text-white text-2xl md:text-3xl mr-2" />
        <span className="text-white text-lg md:text-xl font-bold">Chat App</span>
      </div>
      <div>
        <span className="text-white mr-4">{authUser.fullName}</span>
        <img
          src={authUser.profilePicture}
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
