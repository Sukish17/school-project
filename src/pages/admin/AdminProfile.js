// import React, { useState } from 'react';
// import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteUser, updateUser } from '../../redux/userRelated/userHandle';
// import { useNavigate } from 'react-router-dom'
// import { authLogout } from '../../redux/userRelated/userSlice';
// import { Button, Collapse } from '@mui/material';

import { useSelector } from 'react-redux';
import './admin.css'

const AdminProfile = () => {
    // const [showTab, setShowTab] = useState(false);
    // const buttonText = showTab ? 'Cancel' : 'Edit profile';

    // const navigate = useNavigate()
    // const dispatch = useDispatch();
        const { currentUser } = useSelector((state) => state.user);
    // const { currentUser, response, error } = useSelector((state) => state.user);
    // const address = "Admin"

    // if (response) { console.log(response) }
    // else if (error) { console.log(error) }

    // const [name, setName] = useState(currentUser.name);
    // const [email, setEmail] = useState(currentUser.email);
    // const [password, setPassword] = useState("");
    // const [schoolName, setSchoolName] = useState(currentUser.schoolName);

    // const fields = password === "" ? { name, email, schoolName } : { name, email, password, schoolName }

    // const submitHandler = (event) => {
    //     event.preventDefault()
    //     dispatch(updateUser(fields, currentUser._id, address))
    // }

    // const deleteHandler = () => {
    //     try {
    //         dispatch(deleteUser(currentUser._id, "Students"));
    //         dispatch(deleteUser(currentUser._id, address));
    //         dispatch(authLogout());
    //         navigate('/');
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    return (
        <div className='bg2' >
            <div className='bg4'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnpzFF99w4wsBZRN8YzPGEJTm8pMYOLTXo0K_Qey-kwlfnh8nDwWgpUYGUwVU5b-a3LOE&usqp=CAU"
            className='po1' alt='profile'/>
            
            <p className='para'> Name : {currentUser.name}</p>
            <br />
            <p className='para'>
            Email: {currentUser.email}</p>
            <br />
            <p className='para'>
            School: {currentUser.schoolName}</p>
            <br />
            {/* <Button variant="contained" color="error" onClick={deleteHandler}>Delete</Button> */}
            {/* <Button variant="contained" sx={styles.showButton}
                onClick={() => setShowTab(!showTab)}>
                {showTab ? <KeyboardArrowUp /> : <KeyboardArrowDown />}{buttonText}
            </Button>
            <Collapse in={showTab} timeout="auto" unmountOnExit>
                <div className="register">
                    <form className="registerForm" onSubmit={submitHandler}>
                        <span className="registerTitle">Edit Details</span>
                        <label>Name</label>
                        <input className="registerInput" type="text" placeholder="Enter your name..."
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            autoComplete="name" required />

                        <label>School</label>
                        <input className="registerInput" type="text" placeholder="Enter your school name..."
                            value={schoolName}
                            onChange={(event) => setSchoolName(event.target.value)}
                            autoComplete="name" required />

                        <label>Email</label>
                        <input className="registerInput" type="email" placeholder="Enter your email..."
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            autoComplete="email" required />

                        <label>Password</label>
                        <input className="registerInput" type="password" placeholder="Enter your password..."
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            autoComplete="new-password" />

                        <button className="registerButton" type="submit" >Update</button>
                    </form>
                </div>
            </Collapse> */}</div>
        </div>
    )
}

export default AdminProfile

// const styles = {
//     attendanceButton: {
//         backgroundColor: "#270843",
//         "&:hover": {
//             backgroundColor: "#3f1068",
//         }
//     }
// }