import React from 'react';
import Image from 'next/image'
import SkillSliderContainer from './skills-slider'


let LanguagesLogos:React.FC = () => {

return(
<>
<SkillSliderContainer className="" contentWidth={1290} offsetX={0}>
<Image src="/assets/portfolio-img/react.png" width={150} height={100} objectFit="contain"/>
<Image src="/assets/portfolio-img/nextjs.png" width={150} height={100} objectFit="contain"/>
<Image src="/assets/portfolio-img/tailwindcss.png" width={150} height={100} objectFit="contain"/>
<Image src="/assets/portfolio-img/ts.png" width={150} height={100} objectFit="contain"/>
<Image src="/assets/portfolio-img/node.png" width={150} height={100} objectFit="contain"/>
<Image src="/assets/portfolio-img/gatsby.png" width={150} height={100} objectFit="contain"/>
<Image src="/assets/portfolio-img/graphql.png" width={150} height={100} objectFit="contain"/>
<Image src="/assets/portfolio-img/Apollo_Logo.jpg" width={150} height={100} objectFit="contain"/>
<Image src="/assets/portfolio-img/strapi.png" width={150} height={100} objectFit="contain"/>
<Image src="/assets/portfolio-img/js.png" width={150} height={100} objectFit="contain"/>
<Image src="/assets/portfolio-img/html.png" width={150} height={100} objectFit="contain"/>
<Image src="/assets/portfolio-img/css.png" width={150} height={100} objectFit="contain"/>
</SkillSliderContainer>

</>
)
} 
export default  LanguagesLogos