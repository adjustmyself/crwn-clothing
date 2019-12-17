import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
    SignInContainer,
    TitleContainer,
    ButtonContainer
} from './sign-in.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { gooleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({gooleSignInStart, emailSignInStart}) => {
    const [userCredentials,setUserCredentials] = useState({
        email:'',
        password:''
    })
    const { email, password } = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email,password);
    }

    const handleChange = event => {
        const {value, name} = event.target;
        setUserCredentials({...userCredentials,[name]:value});
    }

    return (
        <SignInContainer>
            <TitleContainer>I aready have an account</TitleContainer>
            <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
            <FormInput 
                name='email'
                type='email'
                value={email}
                handleChange={handleChange}
                label='email'
                required                   
            />
            <FormInput 
                name='password'
                type='password'
                value={password}
                handleChange={handleChange}
                label='password'
                required             
            />
            <ButtonContainer>
                <CustomButton type='submit'>sign in</CustomButton>
                <CustomButton type='button' onClick={gooleSignInStart} isGoogleSignIn>
                    sign in with google
                </CustomButton>
            </ButtonContainer>

        </form>
        </SignInContainer>
    );
    }


const mapDispatchToProps = dispatch => ({
    gooleSignInStart: () => dispatch(gooleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect( null, mapDispatchToProps)(SignIn);