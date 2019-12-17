import React from 'react';


import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionContainerLink,
    OptionContainerDiv
} from './header.styles';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.conponent';
import CartDropdown from '../cart-dropdown/cart-dropdown.compoent';

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionContainerLink to='/shop'>
                SHOP
            </OptionContainerLink>
            <OptionContainerLink to='/contact'>
                CONTACT
            </OptionContainerLink>
            {
                currentUser ?
                <OptionContainerDiv onClick={signOutStart}>SIGN OUT</OptionContainerDiv>
                :
                <OptionContainerLink to='/signin'>SIGN IN</OptionContainerLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
);


const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);