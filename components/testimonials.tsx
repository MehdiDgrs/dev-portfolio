import React from 'react'
import Carousel from './Carousel'
import CarouselItem from './caroussel-item'
import Project from './project'

let Testimonials : React.FC = () => {
return(
    <Carousel className="bg-black text-white py-10 lg:py-20">
        <CarouselItem index={0}>
           <Project>
            hello
            </Project>
        </CarouselItem>
        <CarouselItem index={1}>
           <Project>
            hello
            </Project>
            
        </CarouselItem>
   
    </Carousel>
)
}
export default Testimonials