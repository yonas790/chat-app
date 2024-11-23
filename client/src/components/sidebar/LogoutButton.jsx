/* eslint-disable no-unused-vars */
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import { RiLogoutCircleRLine } from "react-icons/ri";
const LogoutButton = () => {

	const {loading,logout}= useLogout()


	return (
		<div className='mt-auto'>
			{!loading ? (
				<div className='flex items-center justify-center gap-2 mb-4 ' >
					Logout
				<RiLogoutCircleRLine className='w-6 h-6 text-red-700 cursor-pointer' onClick={logout} />
				
				</div>
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;