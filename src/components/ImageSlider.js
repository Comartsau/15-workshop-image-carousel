import imageData from "./ImageData"

import { AiOutlineArrowLeft , AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";

function ImageSlider() {
    const [current,setCurrent] = useState(0)

    const prevslide = () => 
    current === 0 ? setCurrent(imageData.length-1) : setCurrent(current-1)
    
    const nextslide = () => 
    current === imageData.length-1 ? setCurrent(0) : setCurrent(current+1)
    

  return (
    <div>
        <section className="slider">
            <AiOutlineArrowLeft className="leftArrow" onClick={prevslide}/>
            <AiOutlineArrowRight  className="rightArrow" onClick={nextslide}/>
            {imageData.map((image,key) => {
                console.log(image)
                return (
                    <div key={key} className={key === current ? "slide active" : "slide" }>
                        {key === current &&      
                        <div>
                            <img src={image.image} alt={image.title} className="image"/>
                            <p>{image.title}</p>
                        </div>}
                    </div>
                )
            })}
           
        </section> 
    </div>
  )
}

export default ImageSlider