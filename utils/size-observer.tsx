import React, { useEffect,useContext,useState } from 'react' 



interface Size {
    innerWidth:number
}

export let sizeContext = React.createContext<Size>({innerWidth:0})





  let  SizeObserver:React.FC = ({children})=> {

    let [innerWidth,setWidth] = useState(null)


    useEffect(()=>{
        setWidth(window.innerWidth);
      window.addEventListener('resize', () => setWidth(window.innerWidth))
    }, [innerWidth]
    
    )

    return(
    <sizeContext.Provider value ={{innerWidth}} >
        {children}
    </sizeContext.Provider>
    )

}
export default SizeObserver