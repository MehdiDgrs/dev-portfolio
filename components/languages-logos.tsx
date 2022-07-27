import React ,{useContext,useEffect,useRef} from 'react';
import Image from 'next/image'
import SkillSliderContainer ,{SliderItem} from './skills-slider'
import {sizeContext} from '../utils/size-observer'

let LanguagesLogos:React.FC = () => {
let {innerWidth} = useContext(sizeContext);

return(
<>
<SkillSliderContainer  className="" contentWidth={1290} offsetX={0}>
<SliderItem width={150}>
<Image src="/assets/portfolio-img/react.png" width={150} height={100} objectFit="contain"/>
</SliderItem>
<SliderItem width={150}>
<Image src="/assets/portfolio-img/nextjs.png" width={150} height={100} objectFit="contain"/>
</SliderItem>
<SliderItem width={150}>
<Image src="/assets/portfolio-img/tailwindcss.png" width={150} height={100} objectFit="contain"/>
</SliderItem>
<SliderItem width={150}>
<Image src="/assets/portfolio-img/ts.png" width={150} height={100} objectFit="contain"/>
</SliderItem>

<SliderItem width={150}>
<Image src="/assets/portfolio-img/node.png" width={150} height={100} objectFit="contain"/>
</SliderItem>

<SliderItem width={150}>
<Image src="/assets/portfolio-img/gatsby.png" width={150} height={100} objectFit="contain"/>
</SliderItem>



<SliderItem width={150}>
<Image src="/assets/portfolio-img/graphql.png" width={150} height={100} objectFit="contain"/>
</SliderItem>
<SliderItem width={150}>
<Image src="/assets/portfolio-img/Apollo_Logo.jpg" width={150} height={100} objectFit="contain"/>
</SliderItem>
<SliderItem width={150}>
<Image src="/assets/portfolio-img/strapi.png" width={150} height={100} objectFit="contain"/>
</SliderItem>
<SliderItem width={150}>
<Image src="/assets/portfolio-img/js.png" width={150} height={100} objectFit="contain"/>
</SliderItem>

<SliderItem width={150}>
<Image src="/assets/portfolio-img/html.png" width={150} height={100} objectFit="contain"/>
</SliderItem>
<SliderItem width={150}>
<Image src="/assets/portfolio-img/css.png" width={150} height={100} objectFit="contain"/>
</SliderItem>

</SkillSliderContainer>

</>
)
} 
export default  LanguagesLogos