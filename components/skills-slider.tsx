import React, {useRef,useContext,useCallback} from 'react'
import {sizeContext} from '../utils/size-observer'
import useAnimationFrame from './use-animation-frame'

let SkillSliderContainer: React.FC =({children,offsetX, className,contentWidth}) => {
let {width} = useContext(sizeContext)
const refScrollX = useRef(offsetX);
const refContainer = useRef<HTMLDivElement>(null)
const refContent = useRef<HTMLDivElement>(null)

const enabled = true

useAnimationFrame(enabled,   useCallback(()=>{
        const {current:elContainer} = refContainer ;
        const {current:elContent} = refContent;
        if (elContainer && elContent) {
            refScrollX.current +=0.5;
            elContainer.scrollLeft = refScrollX.current
            if(elContainer.scrollLeft >=elContent.clientWidth) {
                refScrollX.current = 0;
                elContainer.scrollLeft=0
            }
        }
    },[]))

return(
    <div ref={refContainer}className={`w-full overflow-x-hidden whitespace-nowrap bg-white max-w-full slider-container ${className}`}>
        
        <div ref={refContent} className="inline-block">
        {children}
        </div>
       
    </div>
)
}


export default SkillSliderContainer