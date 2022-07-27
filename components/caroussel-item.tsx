import React , {useContext,useCallback} from 'react'
import {CarouselContext} from './Carousel';
import styles from '../styles/Carousel.module.css'

interface Props {
    index:number
    children:JSX.Element
}

let CarouselItem:React.FC<Props> = ({children,index}) => {
    const {embla:emblaApi , selectedIndex} = useContext(CarouselContext);
    let isActive = selectedIndex === index
    let handleClick = useCallback(()=> {
        if(emblaApi ===undefined) return
        emblaApi.scrollTo(index)
    },[emblaApi,index])

    return(
        <div className={`${styles.slide} relative ${isActive? 'active' : '' }`}onClick={handleClick}>
            {children}
        </div>
    )
}
export default CarouselItem;