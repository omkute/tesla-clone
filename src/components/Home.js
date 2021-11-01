import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
             title="Model S"
             description="Order online for Touchless Delivery"
             backgroundImg="model-s.jpg"
             leftBtnText="costum order"
             RightBtnText="existing enventory"

            />
            <Section 
            title="Model Y"
             description="Order online for Touchless Delivery"
             backgroundImg="model-y.jpg"
             leftBtnText="costum order"
             RightBtnText="existing enventory"
            />
            <Section 
            title="Model 3"
             description="Order online for Touchless Delivery"
             backgroundImg="model-3.jpg"
             leftBtnText="costum order"
             RightBtnText="existing enventory"
            />
            <Section 
            title="Model X"
             description="Order online for Touchless Delivery"
             backgroundImg="model-x.jpg"
             leftBtnText="costum order"
             RightBtnText="existing enventory"
            />
            <Section 
            title="Solar Panels"
             description="Lowest Cost Solar Panels in America
             "
             backgroundImg="solar-panel.jpg"
             leftBtnText="costum order"
             RightBtnText="Learn More"
            />
            <Section 
            title="Solar Roof"
             description="Produce Clean Energy From Your Roof
             "
             backgroundImg="solar-roof.jpg"
             leftBtnText="costum order"
             RightBtnText="Learn More"
            />
            <Section 
            title="Accessories
            "
             description=""
             backgroundImg="accessories.jpg"
             leftBtnText="Shop now"
             RightBtnText=""
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`