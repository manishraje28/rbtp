import React from 'react'
import SplitText from "./SplitText";
import CardNav from "./CardNav";
const Hero = () => {
  return (
    <div>
         
      <SplitText
        text="Hello, you!"
        delay={100}
        duration={0.6}
      />
    </div>
  )
}

export default Hero