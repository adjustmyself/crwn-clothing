import React from 'react';
import './sign.style.scss';
import SignIn from '../../components/sign-in/sin-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const Sign = () => (
    <div className='sign'>
        <SignIn />
        <SignUp />
    </div>
);

export default Sign;