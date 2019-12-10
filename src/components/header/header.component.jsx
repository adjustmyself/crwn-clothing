import React from 'react';

import {auth} from '../../firebase/firebase.utils';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionContainerLink } from './header.styles';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.conponent';
import CartDropdown from '../cart-dropdown/cart-dropdown.compoent';

const Header = ({ currentUser,hidden }) => (
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
                <OptionContainerLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionContainerLink>
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


export default connect(mapStateToProps)(Header);