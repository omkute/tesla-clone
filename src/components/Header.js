import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from "@material-ui/icons/Menu";

function Header() {

    const [burgerStatus, setburgerStatus]=useState(false);
  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg" alt="" />
      </a>

      <Menu>
        <a>
          <a href="#">Model 3</a>
        </a>
        <a>
          <a href="#">Model X</a>
        </a>
        <a>
          <a href="#">Model Y</a>
        </a>
        <a>
          <a href="#">Model S</a>
        </a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CostomMenu onClick={()=>setburgerStatus(true)}>

        </CostomMenu >
      </RightMenu>
      <BurgerNav show={burgerStatus}>
          <CloseWrapper>
          <CustomCloseButton onClick={()=>setburgerStatus(false)} />

          </CloseWrapper>
          <li><a href="#">Existing Enventory</a></li>
          <li><a href="#">Used Enventory</a></li>
          <li><a href="#">Trade-in </a></li>
          <li><a href="#">Cybertruck</a></li>
          <li><a href="#">Roadster</a></li>
          <li><a href="#">Existing Enventory</a></li>
          <li><a href="#">Existing Enventory</a></li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
        min-height: 60px;
        position: fixed;
        display:flex;
        align-items: center;
        justify-content:space-between;
        padding:20px
        top:0;
        right:0;
        left:0;
        z-index:1;
        margin-left:20px
        

`
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding:  10px;
    
  }
  @media (max-width:900px){
      display:none;
  }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
  a { 
    font-weight: 600;
    text-transform: uppercase;
    padding:  20px;
    flex-wrap: nowrap;
    flex-wrap: nowrap;
  }
`
const CostomMenu = styled(MenuIcon)`
    cursor:pointer;
    margin-right:15px
`
const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    width:300px;
    z-index:5;
    list-style:none;
    padding: 20px
    display :flex;
    text-align:start;
    flex-direction:column;
    justify-content: flex-start;
    transform: ${props => props.show ? 'translateX(0%)' :'translateX(100%)'};
    transition:transform 0.2s ;
    li{
        padding:15px ;
        border-bottom: 1px solid rgba(0,0,0, .3);
        a{
            font-weight:600;
        }
    }
`
const CustomCloseButton = styled(CloseIcon)`
        cursor:pointer;
        margin:8px;
`
const CloseWrapper = styled.div`
        display: flex;
        justify-content:flex-end;

`

