import React, {ReactNode,useCallback,useEffect,useState} from 'react' 
import useEmblaCarousel ,{EmblaCarouselType}  from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from '../styles/Carousel.module.css'
 import ClassNames from 'embla-carousel-class-names'
 
interface ContextValue {
    embla: EmblaCarouselType | undefined

    selectedIndex : number
}

interface Props {
    className?:string
    children: ReactNode
}


export let CarouselContext = React.createContext<ContextValue>({
    embla:undefined,
    selectedIndex:-1
})

let Carousel : React.FC <Props> = ({children,className})  => {
    let [selectedIndex,setSelectedIndex] = useState(0) ;
    let [viewportRef,emblaApi] = useEmblaCarousel(
        {
            loop:true,
            align:'center',
            skipSnaps:false
        },
        [ClassNames(),Autoplay()]
    )
const onSelect = useCallback(()=> {
if(!emblaApi) return setSelectedIndex(emblaApi.selectedScrollSnap)
},[emblaApi,setSelectedIndex])

useEffect(()=> {
    if(!emblaApi) return
    onSelect()
    emblaApi.on('select',onSelect)

},[emblaApi,onSelect])
    return (
        <CarouselContext.Provider value ={{embla:emblaApi,selectedIndex}}>
            <div ref={viewportRef} className={`${styles.viewport} w-full overflow-hidden ${className}`}>
                <div className={`${styles.container} flex`}>
                {children}

                </div>
            </div>
        </CarouselContext.Provider>
    )
}
export default Carousel