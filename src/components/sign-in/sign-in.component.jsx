import React from 'react';
import { connect } from 'react-redux';

import {
    SignInContainer,
    TitleContainer,
    ButtonContainer
} from './sign-in.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { gooleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        const { emailSignInStart } = this.props;
        emailSignInStart(email,password);
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]:value})
    }

    render() {
        const { gooleSignInStart } = this.props;
        return (
            <SignInContainer>
                <TitleContainer>I aready have an account</TitleContainer>
                <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    name='email'
                    type='email'
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label='email'
                    required                   
                />
                <FormInput 
                    name='password'
                    type='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
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
}

const mapDispatchToProps = dispatch => ({
    gooleSignInStart: () => dispatch(gooleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect( null, mapDispatchToProps)(SignIn);