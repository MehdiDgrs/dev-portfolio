import React, {useRef,useContext} from 'react'
import {sizeContext} from '../utils/size-observer'


let SkillSliderContainer: React.FC =({children,offsetX, className,contentWidth}) => {
let {width} = useContext(sizeContext)
const refScrollX = useRef(offsetX);
const refContainer = useRef<HTMLDivElement>(null)
const refContent = useRef<HTMLDivElement>(null)

const enabled = width< contentWidth 

return(
    <div ref={refContainer}className={`w-full overflow-x-hidden whitespace-nowrap bg-white max-w-full slider-container ${className}`}>
        <h1 className="text-center py-10 mx-auto text-xl lg:text-5xl bold">Technologies utilisées</h1>
        <div ref={refContent} className="inline-block">
        {children}
        </div>
    </div>
)
}

export default SkillSliderContainer