import React from 'react';
import { SignPageContainer } from './sign.styles';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const Sign = () => (
    <SignPageContainer>
        <SignIn />
        <SignUp />
    </SignPageContainer>
);

export default Sign;