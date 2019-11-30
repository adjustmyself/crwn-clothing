import React from 'react';
import './sin-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-buttom/custom-buttom.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }
    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'',password:''})
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]:value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I aready have an account</h2>
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
                <div className='buttons'>
                    <CustomButton type='submit'>sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        sign in with google
                    </CustomButton>
                </div>

            </form>
            </div>
        );
    }
}

export default SignIn;