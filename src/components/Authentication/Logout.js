import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser,selectExtractedUsername } from '../../store/auth-slice';
import './Logout.css'


function Logout() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const email =user.email;
  
    const extractedUsername = useSelector(selectExtractedUsername);
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }
  
    return (
        <div className='logoutbody'>
           <div className='alignment'>
           {user ? (
                <div className='logoutcontent'>
                   <p> Welcome <span> {extractedUsername} </span>!!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>Please log in.</p>
            )}
           </div>
        </div>
    );
}

export default Logout;
