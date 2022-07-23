import React from 'react'

let  SliderItem: React.FC =({children,width}) => {
    <div className="inline-flex justify-center items-center mx-4" style={{width}}>
        {children}
    </div>

}
export default SliderItem