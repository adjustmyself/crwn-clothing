import React from 'react';

import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

import {
    SignUpContainer,
    TitleContainer
} from './sign-up.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;
        const {signUpStart} = this.props;

        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        signUpStart({displayName, email, password});

        // try {
        //     // 這個方法會返回一個userAuth物件給我們,但是被包在user裡面,所以我們desturcturing user
        //     const { user } = await auth.createUserWithEmailAndPassword(
        //         email,
        //         password
        //     );
        //     await createUserProfileDocument(user, { displayName });
            
        //     // This will clear our form
        //     this.setState({
        //         displayName:'',
        //         email:'',
        //         password:'',
        //         confirmPassword:''
        //     });
        // } catch (e) {
        //     console.log(e);
        // }
    };
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value});
    };

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <SignUpContainer>
                <TitleContainer>I do not have a account</TitleContainer>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </SignUpContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userProfiles => dispatch(signUpStart(userProfiles))
})

export default connect(null, mapDispatchToProps)(SignUp);