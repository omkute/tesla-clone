import React from 'react'
import styled from 'styled-components'//styling to components
import Fade from 'react-reveal/Fade';


function Section( {title, description, backgroundImg, leftBtnText, RightBtnText}) {
    return (
        <Wrap carImage={backgroundImg} >
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>

                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
            <ButtonGroup   ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    {RightBtnText && 
                    <RightButton>
                        {RightBtnText}
                    </RightButton>}
                </ButtonGroup>
                </Fade>

                <DownArrow src="./images/down-arrow.svg"/>
            </Buttons>
        </Wrap>
    )
}

//Styling function for wrap 
export default Section

const Wrap = styled.div`
        z-index:10;
        width: 100vw;
        height: 100vh;
        // background: orange;
        background-size: cover;
        background-position: center;
        background-repet: no-repeat;
        background-image: url('/images/model-s.jpg');
        display: flex;
        flex-direction: column;
        justify-content: space-between; // verical Alingment because of flex-direction 
        align-items: center; //Horizentely
        background-image: ${props => `url("/images/${props.carImage}")`}

        

`
const ItemText = styled.div`
        padding-top: 15vh;
        text-aling: senter;
        
`
const ButtonGroup = styled.div`
        display: flex;
        margin-bottom:30px;
        @media (max-width:768px){
            flex-direction: column;
        }

`
const LeftButton = styled.div`
        background-color: rgba(23,26,32,0.8);
        height: 40px;
        width:  256px;
        color:  white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100px;
        opacity: 0.85;
        text-transform:uppercase;
        font-size:12px;
        cursor: pointer;
        margin:10px;

`
const RightButton = styled(LeftButton)`
        background-color: white;
        opacity:0.65;
        color:black;
`

const DownArrow = styled.img`
        margin-top:20px;
        height: 40px;
        overflow-x: hiddden;
        animation:animateDown infinite 1.5s;
`

const Buttons = styled.div`
`