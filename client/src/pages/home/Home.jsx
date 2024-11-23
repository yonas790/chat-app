/* eslint-disable no-unused-vars */
import React from 'react';
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    return (
        <div className=''>
        <div className='flex flex-col sm:flex-row w-screen  h-screen   px-8 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <Sidebar />
            <MessageContainer />
        </div>
        </div>
    );
};

export default Home;
