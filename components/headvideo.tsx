import React, { useRef } from 'react'
import Image from 'next/image'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import { ScrollContext } from '../utils/scroll-observer';
import { trace } from 'console';
const Headvideo: React.FC = () => {

    const refContainer = useRef<HTMLDivElement>(null);
    const {scrollY} = React.useContext(ScrollContext)
    let progress = 0 ;
    
    if(refContainer.current) {
        progress= Math.min(1,scrollY/refContainer.current.clientHeight)
    }
    console.log(progress)
    

    return (
        <div ref={refContainer} style={{transform:`translateY(-${progress*20}vh)`}}className="min-h-screen flex flex-col items-center justify-between">
            <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover  ">
                <source src="/assets/bg.webm" type="video/webm; codecs=vp9"/>
                <source src="/assets/bg.mp4" type="video/mp4; codecs=vp9"/>
            </video>
            <div className=" grow"> </div>
            <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center grow">
                <h1 className="mb-6 text-4xl xl:text-5xl">Mehdi Degryse</h1>
                <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">Developpeur Web Front-End</h2>
            </div>
            <div className=" flex-grow-0 transition-all flex-shrink-0 ">
               
            <IconContext.Provider value={{ color: "white" ,className:"animate-bounce   flex-col-reverse ",size:"2em"}}>
  
  <MdOutlineKeyboardArrowDown />
  
</IconContext.Provider>
</div>
           </div>
        
    )



}
export default Headvideo;