import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import LogoutButton from "../sidebar/LogoutButton";
const MessageContainer = () => {
	const {selectedConversation,setSelectedConversation} = useConversation();
	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);
	const {authUser} = useAuthContext();
	return (
		<div className='md:min-w-[450px] w-screen p-2.5 pb-12 h-screen flex py-4  rounded-3xl flex-col '>
			{/* section to display auth user */}
			<div className='flex   px-6 mb-4 items-end justify-between'>
				<div className=' flex flex-row shadow-2xl   p-2 rounded-3xl gap-4'>
				<img
					src={authUser.profilePic}
					alt='profile'
					className='w-12 h-12 rounded-full object-cover'
				/>
				<div>
					<p className='text-gray-400 text-xl font-bold'>{authUser.fullName}</p>
					<p className='text-gray-700'>@{authUser.username}</p>
					
				</div>
				</div>
				<LogoutButton />
			</div>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					
					<div className='bg-slate-800 px-4 py-2 mb-2 rounded-lg'>
						<span className='label-text'>To : </span>{" "}
						<span className='text-gray-130 font-bold'>{selectedConversation.fullName} <span className=" text-gray-500">({selectedConversation.username})</span></span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const {authUser} = useAuthContext();
	
	return (
		<div className='flex items-center justify-center w-full h-screen'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};