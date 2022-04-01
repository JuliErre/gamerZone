import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Loading from "../Loading.svg"

function Image({src}) {
  return (
    <LazyLoadImage
    width="400px"
    height="200px"
    src={src}
    alt="game"
    placeholderSrc={Loading}
    style={{
        objectFit : "cover",
        height : "300px",
        overflow: "hidden"
        
    }}
    
    />
  )
}

export default Image