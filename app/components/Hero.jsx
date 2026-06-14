import React from 'react'
import SplitText from "./SplitText";
import CardNav from "./CardNav";
const Hero = () => {
  return (
    <div>
         <CardNav
      logo="./favicon.ico"
        logoAlt="Company Logo" 
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out" />
      <SplitText
        text="Hello, you!"
        delay={100}
        duration={0.6}
      />
    </div>
  )
}

export default Hero