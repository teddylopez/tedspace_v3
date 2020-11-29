import React from 'react'
import Icon1 from "../../images/svg-4.svg"
import Icon2 from "../../images/svg-5.svg"
import Icon3 from "../../images/svg-6.svg"
import {ServicesContainer, ServicesWrapper, ServicesIcon, ServicesCard, ServicesH2, ServicesH1, ServicesP} from "./ServicesElements"

function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>We can help you</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>We can help you</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>We can help you</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
