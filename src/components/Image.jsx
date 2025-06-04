import { useEffect, useState } from "react"

const ImageComponent = ({src,width,height,className}) => {
  const [curSrc,setCurSrc] = useState(`https://placehold.co/${width}x${height}?text=Loading`)
  useEffect(() =>{
    const img = new Image()
    img.src = src
    img.onload = () =>{
      setCurSrc(src)
    }
    return () =>{
      img.onload = null
    }
  },[src])
  return (
    <img width={width} height={height}
            className={curSrc === src? className : `${className} blur-md`}
            src={curSrc}
            alt=""
          />
  )
}
export default ImageComponent