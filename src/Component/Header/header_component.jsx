import React from 'react';
import './header_component.scss';
import { ReactComponent as Logo} from '../../../src/Assets/crown.svg';
import { auth } from '../firebase/firebase_utils';
import { connect } from 'react-redux';
import CartIcon from '../shop-icon/shop-icon_comp';
import Cart from '../cart-dropdown/cart-dropdown_comp';
import { selectorUserCurrent } from '../../redux/user/user-selector';
import { selectorCartHidden } from '../../redux/cart/cart-selector';
import {createStructuredSelector} from 'reselect';
import { LogoContainer, OptionDiv, OptionLink, Options } from './header_comp_styles';

const Header = ({currentUser, hidden}) => (
  <Header>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <Options>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionDiv to="/contact">CONTACT</OptionDiv>
      {
        currentUser ? 
        <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv> :
        <OptionLink to="/signin">SIGN IN</OptionLink>
      }
      {console.log(currentUser)}
      <CartIcon />
    </Options>
    {
      hidden ? "" :
      <Cart />
    }
  </Header>
)

const mapStateToProps = createStructuredSelector({
  currentUser : selectorUserCurrent,
  hidden: selectorCartHidden
})

export default connect(mapStateToProps)(Header);