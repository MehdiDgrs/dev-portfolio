import React, { useEffect,useContext,useState } from 'react' 



interface Size {
    width:number
}

export let sizeContext = React.createContext<Size>({width:0})





  let  SizeObserver:React.FC = ({children})=> {

    let [width,setWidth] = useState(null)


    useEffect(()=>{
        setWidth(window.innerWidth);
    }, [width]
    
    )

    return(
    <sizeContext.Provider value ={{width}} >
        {children}
    </sizeContext.Provider>
    )

}
export default SizeObserver